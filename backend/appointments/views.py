from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
import json

from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view, permission_classes
from datetime import datetime, date, timedelta

from .models import Appointment
from users.models import CustomUser
from .serializers import AppointmentSerialzer



# Create your views here.
class AppointmentController(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        appointments = Appointment.objects.filter(
            client = user 
        ).all().order_by('date','start_time')[::-1]

    
        SerializedAppointments = AppointmentSerialzer(appointments, many=True)

        return Response(SerializedAppointments.data)



    def post(self, request):
        try:
            user = request.user
            data = json.loads(request.body)

            # Ensure required data exists
            selected_therapist_id = data.get("selected_therapist_id")
            appointment_date = data.get("date")
            start_time = data.get("start_time")

            #change into correct format
            start_time = str(start_time) + ":00"
            
            
            therapist = CustomUser.objects.get(id=selected_therapist_id)

            if not selected_therapist_id or not appointment_date or not start_time:
                return Response({"detail": "Missing required fields."}, status=status.HTTP_400_BAD_REQUEST)

            # Assuming start_time is a string like '14:30'
            # start_time_with_tz = start_time + ":00+00:00"  # You can adjust this based on your time zone handling

            # Create appointment
            appointment = Appointment.objects.create(
                client=user,
                therapist=therapist,
                date=appointment_date,
                start_time=start_time,
            )

            appointment.save()
            # print(f"Error: {str(e)}")

            return Response({"detail": "Appointment scheduled successfully"}, status=status.HTTP_201_CREATED)

        except json.JSONDecodeError:
            return Response({"detail": "Invalid JSON format."}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # print(f"Error: {str(e)}")
            return Response({"detail":"An unexpected error occurred. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_therapist_appointments(request):
    DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    # Extract query parameters
    start_of_week = request.query_params.get('startOfWeek')
    end_of_week = request.query_params.get('endOfWeek')
    therapist_id = request.query_params.get('therapist_id')

    # Validate inputs
    if not therapist_id:
        return Response({'detail': 'Missing therapist_id parameter'}, status=status.HTTP_400_BAD_REQUEST)
    try:
        start_of_week = datetime.strptime(start_of_week, '%Y-%m-%d').date()
        end_of_week = datetime.strptime(end_of_week, '%Y-%m-%d').date()
    except (ValueError, TypeError):
        return Response({'detail': 'Invalid or missing date parameters'}, status=status.HTTP_400_BAD_REQUEST)

    # Fetch and organize appointments
    data = {day: [] for day in DAYS_ORDER}
    try:
        appointments = Appointment.objects.filter(
            therapist_id=therapist_id, 
            date__range=[start_of_week, end_of_week]
        ).order_by('date', 'start_time')

        for appt in appointments:
            day_of_week = appt.date.strftime('%A')
            data[day_of_week].append({
                'start_time': appt.start_time.strftime('%H:%M') if appt.start_time else '',
                'client': appt.client_id,
                'status': appt.status
            })

        # Order the data by days of the week
        ordered_data = {day: data[day] for day in DAYS_ORDER}
        return Response(ordered_data)

    except Exception as e:
        return Response({'detail': 'An error occurred. Try again later.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# @csrf_exempt
# def get_therapist_appointments(request):
#     DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

#     # Extract query parameters
#     start_of_week = request.query_params.get('startOfWeek')
#     end_of_week = request.query_params.get('endOfWeek')
#     therapist_id = request.query_params.get('therapist_id')

#     start_of_week = datetime.strptime(start_of_week, '%Y-%m-%d').date()
#     end_of_week = datetime.strptime(end_of_week, '%Y-%m-%d').date()

#     data = {}

#     try:
  
#         current_date = start_of_week
#         while( current_date <= end_of_week):
#             day_of_week = current_date.strftime('%A')

#             appts= Appointment.objects.filter(
#                 therapist_id = therapist_id, date=current_date
#                 )

#         if appts:
#             for slot in appts:
#                 if day_of_week not in data:
#                     data[day_of_week] = []
#                 data[day_of_week].append({
#                     'start_time': slot.start_time.strftime('%H:%M'),
#                     'status': slot.status
#                 })

#             current_date += timedelta(days=1) 

        
#         # Ensure all days in the week are included in the response, even if no data exists
#         for day in DAYS_ORDER:
#             if day not in data:
#                 data[day] = []    

#         ordered_data = {
#             day: data[day] for day in DAYS_ORDER if day in data
#         }


#         return Response({ordered_data})


#     except Exception as e:
#         return Response ({'detail': 'an error has occured try again later'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_appointment(request):

    data = json.loads(request.body)

    try:
        ap = Appointment.objects.get(id = data['appointment_id'])
        ap.status = data['status']
        ap.save()
        return Response('status updated succesfully')
    except Exception as e:
         return Response({'detail': 'An error occurred. Try again later.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_upcoming_session(request):
    user = request.user
    today = date.today()

    # Query the next upcoming appointment
    upcoming_appointment = (
        Appointment.objects.filter(client=user,status='confirmed', date__gte=today)  # Future or today
        .order_by('date', 'start_time')  # Closest date and earliest time
        .first()  # Get the first result
    )

    if upcoming_appointment:
        serialized_ap = AppointmentSerialzer(upcoming_appointment)
        return Response(serialized_ap.data)
    else:
        return Response({"message": "No upcoming appointments found."}, status=404)