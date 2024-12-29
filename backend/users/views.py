from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
import json
from .models import CustomUser, CustomUserManager, ClientProfile, TherapistProfile, TherapistAvailability, SpecificDayAvailability
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from datetime import datetime, timedelta

# Create your views here.
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

#Login handling
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

#Registration view
# def register_view(request):
#     if(request.method== 'POST'):
#         data = json.loads(request.body)
#         username = data['username']
#         firstname = data['firstname']
#         lastname = data['lastname']
#         email = data['email']
#         password = data['password']
#         if CustomUser.objects.filter(username=username).exists():
#             return JsonResponse({'error': 'Username already taken'}, status=400)

#         user = CustomUser.objects.create_user(username=username,email=email, first_tname=firstname, last_name=lastname)
#         user.set_password(password)
#         user.save()
#         return JsonResponse({'message': 'User created successfully'}, status=201)


# @csrf_exempt
# def register_view(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         username = data['username']
#         firstname = data['firstname']
#         lastname = data['lastname']
#         birthday= data['birthday']
#         sexe=data['sexe']
#         city=data['city']
#         state=data['state']
#         country=data['country']
#         email = data['email']
#         password = data['password']

#         # if CustomUser.objects.filter(username=username).exists():
#         #     return JsonResponse({'error': 'Username already taken'}, status=400)

#         user = CustomUser.objects.create_user(
#             username=username,
#             email=email,
#             first_name=firstname,
#             last_name=lastname,
#             birthday=birthday,
#             sexe=sexe,
#             city=city,
#             state=state,
#             country=country,
#             role='c'
            
#         )
#         user.set_password(password)
#         user.save()
 

#         return JsonResponse({'message': 'User created successfully'}, status=201)
    

# @csrf_exempt
# def get_user (request):
#     if(request=='POST'):
#         data = json.loads('body')
#         accessToken = data['accessToken']




from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import CustomUserSerializer, ClientProfileSerializer, TherapistProfileSerializer, TherapistAvailabilitySerializer
from .serializers  import SpecificDayAvailabilitySerializer

class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        user = request.user
        
        if(user.is_client):
            cp = user.clientprofile
            firstname = cp.firstname
            lastname = cp.lastname
            specialization = ''
            sexe=cp.sexe
        elif(user.is_therapist):
            tp = user.therapistprofile
            firstname = tp.firstname
            lastname = tp.lastname
            specialization = tp.specialization
            sexe=tp.sexe

        content = {'firstname': firstname,
                    'lastname' : lastname,
                    'specialization': specialization,
                    'sexe':sexe}


        
        return Response(content)
        
       
class Profile(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        
     
        # username= user.username
        # firstname = user.first_name
        # lastname = user.last_name
        # email = user.email
        # city = user.city
        # country = user.country

        user_id = request.query_params.get('therapist_id')

        if user_id:
            try:
                user = CustomUser.objects.get(id=user_id)
            except CustomUser.DoesNotExist:
                return Response({"error": "User not found"}, status=404)
        else:
            user = request.user


        if(user.is_client == True):
            cp = user.clientprofile
            SerilizedUser = CustomUserSerializer(user)
            SerializedClientProfile = ClientProfileSerializer(cp)
            content = SerilizedUser.data
            content['profile'] = SerializedClientProfile.data
        elif(user.is_therapist == True):
            tp = user.therapistprofile
            SerilizedUser = CustomUserSerializer(user)
            SerializedTherapistProfile = TherapistProfileSerializer(tp)
            content = SerilizedUser.data
            content['profile'] = SerializedTherapistProfile.data

        # content = {
        #         'username' : username,
        #         'firstname': firstname,
        #         'lastname' : lastname,
        #         'email' : email,
        #         'city' : city,
        #         'country' : country
        #         }


        return Response(content)

    # Update users data
    def put(self, request):
        user = request.user
       
        data = json.loads(request.body)


        if(user.is_client):
            cp = user.clientprofile

            # Update the username field of the user
            user.username = data['username']
            cp.firstname = data['firstname']
            cp.lastname = data['lastname']
            user.save()  # Save the changes to the database
            cp.save()
        elif(user.is_therapist):
            tp = user.therapistprofile

            user.username = data['username']
            tp.firstname = data['firstname']
            tp.lastname = data['lastname']
            user.save()  # Save the changes to the database
            tp.save()


        return Response('Update success')



    # def patch(self, request):
    #     user = request.user
    #     serializer = CustomUserSerializer(user, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, 'status.HTTP_200_OK')
    #     return Response(serializer.errors, "status.HTTP_400_BAD_REQUEST")

class Profiles(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Accept multiple IDs
        therapist_ids = request.query_params.getlist('therapist_ids[]')

        if therapist_ids:
            users = CustomUser.objects.filter(id__in=therapist_ids, is_therapist=True)
            if not users.exists():
                return Response({"error": "No therapists found"}, status=404)

            serialized_profiles = []
            for user in users:
                tp = user.therapistprofile
                serialized_user = CustomUserSerializer(user)
                serialized_therapist_profile = TherapistProfileSerializer(tp)
                profile_data = serialized_user.data
                profile_data['profile'] = serialized_therapist_profile.data
                serialized_profiles.append(profile_data)

            return Response(serialized_profiles)
        
        return Response({"error": "No therapist IDs provided"}, status=400)
        

#Register Client
@csrf_exempt
def register_client(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        firstname = data['firstname']
        lastname = data['lastname']
        birthday= data['birthday']
        sexe=data['sexe']
        city=data['city']
        state=data['state']
        country=data['country']
        email = data['email']
        password = data['password']

        # if CustomUser.objects.filter(username=username).exists():
        #     return JsonResponse({'error': 'Username already taken'}, status=400)

        #Create User
        user = CustomUser.objects.create_user(
            username=username,
            email=email,
            is_client=True,
    
        )
        user.set_password(password)
        user.save()

        # Create Profile
        profile = ClientProfile.objects.create(
            user=user,
            firstname=firstname,
            lastname=lastname,
            birthday=birthday,
            sexe=sexe,
            city=city,
            state=state,
            country=country,
            
        )

        profile.save()

        return JsonResponse({'message': 'User created successfully'}, status=201)
    


#Register Client
@csrf_exempt
def register_therapist(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        firstname = data['firstname']
        lastname = data['lastname']
        birthday= data['birthday']
        sexe= data['sexe']
        city= data['city']
        state= data['state']
        country= data['country']
        email= data['email']
        password= data['password']
        specialization= data['specialization']
        bio = data.get('bio', '')  # Default to empty string if not provided
        experience_years = data.get('experienceyears', None)  # Use None if not provided



        # if CustomUser.objects.filter(username=username).exists():
        #     return JsonResponse({'error': 'Username already taken'}, status=400)

        #Create User
        user = CustomUser.objects.create_user(
            username=username,
            email=email,
            is_therapist=True,
            
        )
        user.set_password(password)
        user.save()

        # Create Profile
        profile = TherapistProfile.objects.create(
            user=user,
            firstname=firstname,
            lastname=lastname,
            birthday=birthday,
            sexe=sexe,
            city=city,
            state=state,
            country=country,
            specialization=specialization,
            bio= bio,
            experience_years=experience_years
        )

        profile.save()

        return JsonResponse({'message': 'User created successfully'}, status=201)
    
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination    

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 8
    page_size_query_param = 'page_size'
    max_page_size = 100 

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,  # Total items
            'page_size': self.page.paginator.per_page,  # Current page size
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data  # Actual paginated data
    })
    
#get all therapists
@api_view(['GET'])
def get_therapists(request):

    therapist_ids = request.query_params.getlist('therapist_ids[]')

# therapist_profiles = TherapistProfile.objects.filter(therapist__id__in=therapist_ids)
    if(therapist_ids):
        tl = TherapistProfile.objects.filter(user__in=therapist_ids)
        serializedTL = TherapistProfileSerializer(tl, many=True)
        return Response(serializedTL.data)
    else:
        tl = TherapistProfile.objects.all().order_by('ratings')[::-1]
        paginator = LargeResultsSetPagination()
        paginated_therapists = paginator.paginate_queryset(tl, request)
        serialized_therapists = TherapistProfileSerializer(paginated_therapists , many=True)    

        return paginator.get_paginated_response(serialized_therapists.data)

#get all therapists
@api_view(['GET'])
@csrf_exempt
def get_clients(request):

    client_ids = request.query_params.getlist('client_ids[]')

# therapist_profiles = TherapistProfile.objects.filter(therapist__id__in=therapist_ids)
    if(client_ids):
        cl = ClientProfile.objects.filter(user__in=client_ids)
        serializedCL = ClientProfileSerializer(cl, many=True)
    else:
        cl = ClientProfile.objects.all()
        serializedCL = ClientProfileSerializer(cl, many=True)

    return Response(serializedCL.data)

    
from itertools import groupby
from operator import itemgetter
from django.db.models import F

#get recurring schedule alone
@api_view(['GET'])
@permission_classes([IsAuthenticated])
@csrf_exempt
def get_recurring_schedule(request):

    DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    user = request.user

    ta = TherapistAvailability.objects.filter(therapist=user).annotate(
        day=F('day_of_week'), 
        start=F('start_time'), 
        end=F('end_time'), 
        available=F('is_available')
    ).values('day', 'start', 'end', 'available')

    # Group by day_of_week
    grouped_data = {}
    for day, slots in groupby(sorted(ta, key=itemgetter('day')), key=itemgetter('day')):
        grouped_data[day] = [
            {
                'from': slot['start'].strftime('%H:%M') if slot['start'] else '',
                'to': slot['end'].strftime('%H:%M') if slot['end'] else '',
                'is_available': slot['available']
            }
            for slot in slots
        ]

        # Sort grouped data by the custom days order
    ordered_grouped_data = {
        day: grouped_data[day] for day in DAYS_ORDER if day in grouped_data
    }

    return Response(ordered_grouped_data)


#Therapist Availability
class ScheduleAvailability(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    #get recurring schedule alone
    # def get(self, request):
    #     user = request.user
    #     ta = TherapistAvailability.objects.all().filter(therapist = user)
    #     serializedTa = TherapistAvailabilitySerializer(ta, many=True)

    #     return Response(serializedTa.data)


    # def get(self, request):
    #     DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    #     user = request.user

    #     ta = TherapistAvailability.objects.filter(therapist=user).annotate(
    #         day=F('day_of_week'), 
    #         start=F('start_time'), 
    #         end=F('end_time'), 
    #         available=F('is_available')
    #     ).values('day', 'start', 'end', 'available')

    #     # Group by day_of_week
    #     grouped_data = {}
    #     for day, slots in groupby(sorted(ta, key=itemgetter('day')), key=itemgetter('day')):
    #         grouped_data[day] = [
    #             {
    #                 'from': slot['start'].strftime('%H:%M') if slot['start'] else '',
    #                 'to': slot['end'].strftime('%H:%M') if slot['end'] else '',
    #                 'is_available': slot['available']
    #             }
    #             for slot in slots
    #         ]

    #       # Sort grouped data by the custom days order
    #     ordered_grouped_data = {
    #         day: grouped_data[day] for day in DAYS_ORDER if day in grouped_data
    #     }

    #     return Response(ordered_grouped_data)


    # get data with special and recurring schedule combined
    def get(self, request):
        DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        
        # Extract query parameters
        start_of_week = request.query_params.get('startOfWeek')
        end_of_week = request.query_params.get('endOfWeek')
        # therapist_id = request.query_params.get('therapist_id')


        # if(therapist_id):
        #     therapist_profile = TherapistProfile.objects.get(id = therapist_id)
        #     user = therapist_profile.user
        # else:
        #     user = request.user
        user = request.user
        


        if not start_of_week or not end_of_week:
            return Response({"error": "Invalid date range"}, status=400)

        # Convert strings to date objects
        start_of_week = datetime.strptime(start_of_week, '%Y-%m-%d').date()
        end_of_week = datetime.strptime(end_of_week, '%Y-%m-%d').date()

        # Prepare a dictionary to store availability
        grouped_data = {}

        # Iterate through the days in the week
        current_date = start_of_week
        while current_date <= end_of_week:
            day_of_week = current_date.strftime('%A')  # Get day name (e.g., Monday)
            # Fetch specific availability for the current date
            specific_availability = SpecificDayAvailability.objects.filter(
                therapist=user, date=current_date
            ).annotate(
                start=F('start_time'),
                end=F('end_time'),
                available=F('is_available')
            ).values('start', 'end', 'available')
            
            if specific_availability.exists():
                # Use specific availability if it exists
                grouped_data[day_of_week] = [
                    {
                        
                        'from': slot['start'].strftime('%H:%M'),
                        'to': slot['end'].strftime('%H:%M'),
                        'is_available': slot['available']
                    }
                    for slot in specific_availability
                ]
            else:
                # Fallback to default availability for the day of the week
                default_availability = TherapistAvailability.objects.filter(
                    therapist=user, day_of_week=day_of_week
                ).annotate(
                    start=F('start_time'),
                    end=F('end_time'),
                    available=F('is_available')
                ).values('start', 'end', 'available')
                
                grouped_data[day_of_week] = [
                    {
                        'from': slot['start'].strftime('%H:%M') if slot['start'] else '',
                        'to': slot['end'].strftime('%H:%M') if slot['end'] else '',
                        'is_available': slot['available']
                    }
                    for slot in default_availability
                ]
            
            current_date += timedelta(days=1)

        # Ensure all days in the week are included in the response, even if no data exists
        for day in DAYS_ORDER:
            if day not in grouped_data:
                grouped_data[day] = []

    # Sort grouped data by the custom days order
        ordered_grouped_data = {
            day: grouped_data[day] for day in DAYS_ORDER if day in grouped_data
        }


        return Response(ordered_grouped_data)
        

    # def get(self, request):
    #     DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    #     user = request.user

    #     # Extract query parameters
    #     start_of_week = request.query_params.get('startOfWeek')
    #     end_of_week = request.query_params.get('endOfWeek')

    #     if not start_of_week or not end_of_week:
    #         return Response({"error": "Invalid date range"}, status=400)

    #     # Convert strings to date objects
    #     start_of_week = datetime.strptime(start_of_week, '%Y-%m-%d').date()
    #     end_of_week = datetime.strptime(end_of_week, '%Y-%m-%d').date()

    #     # Prepare a dictionary to store availability
    #     grouped_data = {}

    #     # Iterate through the days in the week
    #     current_date = start_of_week
    #     while current_date <= end_of_week:
    #         day_of_week = current_date.strftime('%A')  # Get day name (e.g., Monday)

    #         # Fetch specific availability for the current date
    #         specific_availability = SpecificDayAvailability.objects.filter(
    #             therapist=user, date=current_date
    #         ).annotate(
    #             start=F('start_time'),
    #             end=F('end_time'),
    #             available=F('is_available')
    #         ).values('start', 'end', 'available')

    #         if specific_availability.exists():
    #             # Use specific availability if it exists
    #             grouped_data[day_of_week] = [
    #                 {
    #                     'from': slot['start'].strftime('%H:%M'),
    #                     'to': slot['end'].strftime('%H:%M'),
    #                     'is_available': slot['available']
    #                 }
    #                 for slot in specific_availability
    #             ]
    #         else:
    #             # Fallback to default availability for the day of the week
    #             default_availability = TherapistAvailability.objects.filter(
    #                 therapist=user, day_of_week=day_of_week
    #             ).annotate(
    #                 start=F('start_time'),
    #                 end=F('end_time'),
    #                 available=F('is_available')
    #             ).values('start', 'end', 'available')

    #             grouped_data[day_of_week] = [
    #                 {
    #                     'from': slot['start'].strftime('%H:%M') if slot['start'] else '',
    #                     'to': slot['end'].strftime('%H:%M') if slot['end'] else '',
    #                     'is_available': slot['available']
    #                 }
    #                 for slot in default_availability
    #             ]

    #         current_date += timedelta(days=1)

    #     # Ensure all days in the week are included in the response, even if no data exists
    #     for day in DAYS_ORDER:
    #         if day not in grouped_data:
    #             grouped_data[day] = []

    #     # Sort grouped data by the custom days order
    #     ordered_grouped_data = {
    #         day: grouped_data[day] for day in DAYS_ORDER if day in grouped_data
    #     }

    #     # Combine recurring schedule into the response
    #     recurring_schedule = TherapistAvailability.objects.filter(therapist=user).annotate(
    #         day=F('day_of_week'),
    #         start=F('start_time'),
    #         end=F('end_time'),
    #         available=F('is_available')
    #     ).values('day', 'start', 'end', 'available')

    #     combined_response = {
    #         "specific_schedule": ordered_grouped_data,
    #         "recurring_schedule": [
    #             {
    #                 "day": entry['day'],
    #                 "from": entry['start'].strftime('%H:%M') if entry['start'] else '',
    #                 "to": entry['end'].strftime('%H:%M') if entry['end'] else '',
    #                 "is_available": entry['available']
    #             }
    #             for entry in recurring_schedule
    #         ]
    #     }

    #     return Response(combined_response)


    def post(self,request):
        user = request.user
        # ta = TherapistAvailability.objects.filter(therapist = user)
        data = json.loads(request.body)

        # Handle deleted slots
        deleted_slots = data.get('deleted_slots', {})
        for day, slots in deleted_slots.items():
            for slot in slots:
                start_time = slot.get('from')
                end_time = slot.get('to')
                TherapistAvailability.objects.filter(
                    therapist=user,
                    day_of_week=day,
                    start_time=start_time,
                    end_time=end_time
                ).delete()


        # Handle added/updated slots
        schedule = data.get('recSchedule', {})
        for day, slots in schedule.items():
            for slot in slots:
                start_time = slot['from'] if slot['from'] else None
                end_time = slot['to'] if slot['to'] else None
                existing_entry = TherapistAvailability.objects.filter(
                    therapist = user,
                    day_of_week = day,
                    start_time = start_time,
                    end_time = end_time,
                   
                    ).first()
                
                if(existing_entry):
                    if(existing_entry.is_available == slot['is_available']):
                        pass
                    else:
                        existing_entry.is_available = slot['is_available']
                        existing_entry.save()
                else:
                    ta = TherapistAvailability.objects.create(
                    therapist = user,
                    day_of_week = day,
                    start_time = start_time,
                    end_time = end_time,
                    is_available = slot['is_available']
                    )
                    ta.save()
            
                
        return Response({'msg': 'Schedule Saved successfully'})
    

    # def delete(self, request):
    #     user = request.user
    #     data = json.loads(request.body)
    #     day = data.get('day_of_week')
    #     start_time = data.get('from')
    #     end_time = data.get('to')

    #     if not day or not start_time or not end_time:
    #         return Response(
    #             {'error': 'Invalid input. Provide day_of_week, from, and to.'},
    #             status=status.HTTP_400_BAD_REQUEST
    #         )

    #     try:
    #         slot = TherapistAvailability.objects.filter(
    #             therapist=user,
    #             day_of_week=day,
    #             start_time=start_time,
    #             end_time=end_time
    #         ).first()

    #         if slot:
    #             slot.delete()
    #             return Response({'message': 'Slot deleted successfully.'}, status=status.HTTP_200_OK)
    #         else:
    #             return Response(
    #                 {'error': 'Slot not found.'},
    #                 status=status.HTTP_404_NOT_FOUND
    #             )
    #     except Exception as e:
    #         return Response(
    #             {'error': 'Error deleting the slot: ' + str(e)},
    #             status=status.HTTP_500_INTERNAL_SERVER_ERROR
    #         )

def group_slots_by_date(sas):
    grouped_data = defaultdict(list)

    # Loop through the QuerySet and group slots by date
    for sa in sas:
        grouped_data[sa.date.isoformat()].append({
            'from': sa.start_time,  # Time is formatted to ISO 8601
            'to': sa.end_time,      # Time is formatted to ISO 8601
            'is_available': sa.is_available
        })

    # Convert defaultdict to a regular dictionary before returning
    return dict(grouped_data)

from collections import defaultdict

class SpecialAvailability(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

 
    def get(self, request):
        user = request.user
       
       # Fetch SpecificDayAvailability for the user
        sas = SpecificDayAvailability.objects.filter(therapist=user)

        # Group the slots by date using the helper function
        grouped_data = group_slots_by_date(sas)

        # Return the grouped data in the response
        return Response(grouped_data)


        # Sezializedsa = SpecificDayAvailabilitySerializer(sa, many=True)

        # return Response(Sezializedsa.data)
        



    def post(self, request):
        user = request.user
        data = json.loads(request.body)

        # Handle deleted slots
        deleted_slots = data.get('deleted_slots', {})
        for date, slots in deleted_slots.items():
            for slot in slots:
                start_time = slot.get('from')
                end_time = slot.get('to')
                SpecificDayAvailability.objects.filter(
                    therapist=user,
                    date=date,
                    start_time=start_time,
                    end_time=end_time
                ).delete()


        # Handle added/updated slots
        schedule = data.get('specialSchedule', {})
        for date, slots in schedule.items():
            for slot in slots:
                start_time = slot['from'] if slot['from'] else None
                end_time = slot['to'] if slot['to'] else None
                existing_entry = SpecificDayAvailability.objects.filter(
                    therapist = user,
                    date = date,
                    start_time = start_time,
                    end_time = end_time,
                   
                    ).first()
                
                if(existing_entry):
                    if(existing_entry.is_available == slot['is_available']):
                        pass
                    else:
                        existing_entry.is_available = slot['is_available']
                        existing_entry.save()
                else:
                    sa = SpecificDayAvailability.objects.create(
                    therapist = user,
                    date = date,
                    start_time = start_time,
                    end_time = end_time,
                    is_available = slot['is_available']
                    )
                    sa.save()
            
                
        return Response({'msg': 'Schedule Saved successfully'})



class OneDayAvaialbility(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        data = json.loads(request.body)

                # Handle added/updated slots
        
        for date, slots in data.items():
            for slot in slots:
                start_time = slot['from'] if slot['from'] else None
                end_time = slot['to'] if slot['to'] else None
                existing_entry = SpecificDayAvailability.objects.filter(
                    therapist = user,
                    date = date,
                    start_time = start_time,
                    end_time = end_time,
                   
                    ).first()
                
                if(existing_entry):
                    if(existing_entry.is_available == slot['is_available']):
                        pass
                    else:
                        existing_entry.is_available = slot['is_available']
                        existing_entry.save()
                else:
                    sa = SpecificDayAvailability.objects.create(
                    therapist = user,
                    date = date,
                    start_time = start_time,
                    end_time = end_time,
                    is_available = slot['is_available']
                    )
                    sa.save()
            
                
        return Response({'msg': 'Schedule Saved successfully'})

        
        


#get therapist schedule client pov
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# @csrf_exempt
# def get_therapist_schedule(request):

#     DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

#     # Extract query parameters
#     start_of_week = request.query_params.get('startOfWeek')
#     end_of_week = request.query_params.get('endOfWeek')
#     therapist_id = request.query_params.get('therapist_id')

#     # therapist_profile = TherapistProfile.objects.get(id = therapist_id)
#     # user = therapist_profile.user

#     user = therapist_id

#     if not start_of_week or not end_of_week:
#         return Response({"error": "Invalid date range"}, status=400)

#     # Convert strings to date objects
#     start_of_week = datetime.strptime(start_of_week, '%Y-%m-%d').date()
#     end_of_week = datetime.strptime(end_of_week, '%Y-%m-%d').date()

#     # Prepare a dictionary to store availability
#     grouped_data = {}

#     # Iterate through the days in the week
#     current_date = start_of_week
#     while current_date <= end_of_week:
#         day_of_week = current_date.strftime('%A')  # Get day name (e.g., Monday)
#         # Fetch specific availability for the current date
#         specific_availability = SpecificDayAvailability.objects.filter(
#             therapist=user, date=current_date
#         ).annotate(
#             start=F('start_time'),
#             end=F('end_time'),
#             available=F('is_available')
#         ).values('start', 'end', 'available')
        
#         if specific_availability.exists():
#             # Use specific availability if it exists
#             grouped_data[day_of_week] = [
#                 {
                    
#                     'from': slot['start'].strftime('%H:%M'),
#                     'to': slot['end'].strftime('%H:%M'),
#                     'is_available': slot['available']
#                 }
#                 for slot in specific_availability
#             ]
#         else:
#             # Fallback to default availability for the day of the week
#             default_availability = TherapistAvailability.objects.filter(
#                 therapist=user, day_of_week=day_of_week
#             ).annotate(
#                 start=F('start_time'),
#                 end=F('end_time'),
#                 available=F('is_available')
#             ).values('start', 'end', 'available')
            
#             grouped_data[day_of_week] = [
#                 {
#                     'from': slot['start'].strftime('%H:%M') if slot['start'] else '',
#                     'to': slot['end'].strftime('%H:%M') if slot['end'] else '',
#                     'is_available': slot['available']
#                 }
#                 for slot in default_availability
#             ]
        
#         current_date += timedelta(days=1)

#     # Ensure all days in the week are included in the response, even if no data exists
#     for day in DAYS_ORDER:
#         if day not in grouped_data:
#             grouped_data[day] = []

# # Sort grouped data by the custom days order
#     ordered_grouped_data = {
#         day: grouped_data[day] for day in DAYS_ORDER if day in grouped_data
#     }


#     return Response(ordered_grouped_data)




#get therapist schedule including appointments into account 
@api_view(['GET'])
@permission_classes([IsAuthenticated])
@csrf_exempt
def get_therapist_schedule(request):
    DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    # Extract query parameters
    start_of_week = request.query_params.get('startOfWeek')
    end_of_week = request.query_params.get('endOfWeek')
    therapist_id = request.query_params.get('therapist_id')

    start_of_week = datetime.strptime(start_of_week, '%Y-%m-%d').date()
    end_of_week = datetime.strptime(end_of_week, '%Y-%m-%d').date()

    data = {}

    if not start_of_week or not end_of_week:
        return Response({"error": "Invalid date range"}, status=400)

    try:
  
        current_date = start_of_week
        while( current_date <= end_of_week):
            day_of_week = current_date.strftime('%A')

            sta= SpecificDayAvailability.objects.filter(
                therapist_id = therapist_id, date=current_date
                )

            if(sta):
                for slot in sta:
                    data[day_of_week] = [
                        {
                            'from': slot.start_time.strftime('%H:%M') if slot.start_time else '',
                            'to': slot.end_time.strftime('%H:%M') if slot.end_time else '',
                            'is_available': slot.is_available 
                        }    
                        
                    ]

                
            else:
                rta = TherapistAvailability.objects.filter(
                    therapist_id = therapist_id, day_of_week = day_of_week 
                )

                for slot in rta:
                    data[day_of_week] = [
                        {
                            'from': slot.start_time.strftime('%H:%M') if slot.start_time else '',
                            'to': slot.end_time.strftime('%H:%M') if slot.end_time else '',
                            'is_available': slot.is_available 
                        }
                    
                    ]
    

            current_date += timedelta(days=1) 

        
        # Ensure all days in the week are included in the response, even if no data exists
        for day in DAYS_ORDER:
            if day not in data:
                data[day] = []    

        ordered_data = {
            day: data[day] for day in DAYS_ORDER if day in data
        }


        return Response(ordered_data)


    except Exception as e:
        return Response ({'detail': 'an error has occured try again later'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




#get clients selected_therapist
@api_view(['GET'])
@permission_classes([IsAuthenticated])
@csrf_exempt
def get_assigned_therapist(request):
    user = request.user

    client = ClientProfile.objects.get(user = user)
    # assigned_therapist = CustomUser.objects.get(id = client.selected_therapist_id)
    # atp = TherapistProfile.objects.get(user_id = assigned_therapist)

    assigned_therapist = TherapistProfile.objects.get(user_id = client.selected_therapist_id)
    serializedAT = TherapistProfileSerializer(assigned_therapist)

    return Response(serializedAT.data)

#set clients selected_therapist
@api_view(['POST'])
@permission_classes([IsAuthenticated])
@csrf_exempt
def set_assigned_therapist(request):
    user = request.user
    data = json.loads(request.body)

    cp = user.clientprofile

    try:
        # cp = ClientProfile.objects.get(user_id = user)
        
        cp.selected_therapist_id = data['selected_therapist_id']
        cp.save()
        return Response(True)
    except:
        return Response(False)








#---------------------------------------------------------------

#Therapist Availability
# class ScheduleAvailability(APIView):
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAuthenticated]

#     def get(self,request):

#         ta = TherapistAvailability.objects.all().filter(therapist = request.user)
#         SerializedAvailability = TherapistAvailabilitySerializer(ta, many=True)
#         return Response(SerializedAvailability.data)
    
#     def post(self,request):
#         user = request.user
#         # ta = TherapistAvailability.objects.filter(therapist = request.user)
#         data = json.loads(request.body)
#         today = datetime.now()
#         week_days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    

#         #Set stating date to closest monday
#         for i in range(0,7):
#             td = timedelta(i)
#             my_date = today+td
#             if(my_date.strftime("%A") == "Monday"):
#                 startdate = my_date
#                 break


#         try:
#             for week_day in week_days:

#                 for i in range(0,7):
#                     td = timedelta(i)
#                     my_date = startdate + td
#                     day_name = my_date.strftime("%A")

#                     if(day_name == week_day):
#                         date = my_date
#                         day_data = data[week_day]
#                         startFrom = day_data['from']
#                         goTo = day_data['to']
#                         is_available = day_data['is_available']

#                         #split cast time
#                         splitFrom = startFrom.split(':')[0]
#                         splitgoTo = goTo.split(':')[0]
#                         startFromInt = int(splitFrom)
#                         goToInt = int(splitgoTo)
                    
#                         for time in range(startFromInt, goToInt):
#                             start_time = str(time)+':00:00'
#                             end_time = str(time+1)+':00:00'

#                             existing_entry = TherapistAvailability.objects.filter(
#                                 therapist = user,
#                                 date=date,
#                                 start_time = start_time,
#                                 end_time = end_time,        
#                             ).first()
                            
#                             if(existing_entry):
#                                 if (existing_entry.is_available == is_available):
#                                     pass
#                                 else:
#                                     existing_entry.is_available = is_available
#                                     existing_entry.save()
#                             else:
#                                 ta = TherapistAvailability.objects.create(
#                                     therapist = user,
#                                     date = date,
#                                     start_time = start_time,
#                                     end_time = end_time,
#                                     is_available = is_available
#                                 )
#                                 ta.save()
                            

            
#             return Response({'Message' : 'success'})
        
#         except KeyError as e:
#             return Response({'Message': 'Failed', 'Error': str(e)}, status=400)
#         except Exception as e:
#             return Response({'Message': 'Failed', 'Error': str(e)}, status=500)


        #  def put(self, request):
        # user = request.user
       
        # data = json.loads(request.body)

        # if(user.is_client):
        #     cp = user.clientprofile

        #     # Update the username field of the user
        #     user.username = data['username']
        #     cp.firstname = data['firstname']
        #     cp.lastname = data['lastname']
        #     user.save()  # Save the changes to the database
        #     cp.save()
        # elif(user.is_therapist):
        #     tp = user.therapistprofile

        #     user.username = data['username']
        #     tp.firstname = data['firstname']
        #     tp.lastname = data['lastname']
        #     user.save()  # Save the changes to the database
        #     tp.save()


        # return Response('Update success')



# handle rec Schedule 

# from collections import defaultdict


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# @csrf_exempt
# def get_rec_schedule(request):
#     user = request.user
#     week_days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
#     recScheduleData = defaultdict(list) 
#     recScheduleData_2 = defaultdict(list) 

#     entries = TherapistAvailability.objects.all().filter( 
#             therapist = user,
#         )


#     for entry in entries:

#         dayName = entry.date.strftime("%A")
#         if(dayName == entry.date.strftime("%A")):

#             recScheduleData[dayName].append(
#                 {
#                     "id": entry.id,
#                     "date": entry.date,
#                     "start_time": entry.start_time,
#                     "end_time": entry.end_time,
#                     "is_available": entry.is_available
#                     })
            
#     for day in recScheduleData:

#         lowestTime = recScheduleData[day][0]['start_time']
#         highestTime = recScheduleData[day][0]['end_time']

#         for slot in recScheduleData[day]:
        
#             if(slot["start_time"] < lowestTime ):
#                 lowestTime = slot["start_time"]
            
#             if(slot["end_time"] > highestTime):
#                 highestTime = slot["end_time"]
                

#             recScheduleData_2[day] = {
#                     "date": slot["date"],
#                     "from": lowestTime,
#                     "to": highestTime,
#                     "is_available": slot["is_available"]
#                 }
    
#     return Response(recScheduleData_2)