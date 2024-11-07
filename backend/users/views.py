from django.shortcuts import render
from django.http import JsonResponse
import json
from .models import CustomUser, CustomUserManager, ClientProfile, TherapistProfile
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone


# Create your views here.
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

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
from .serializers import CustomUserSerializer, ClientProfileSerializer, TherapistProfileSerializer

class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        user = request.user
        
        if(user.is_client == True):
            cp = user.clientprofile
            firstname = cp.firstname
            lastname = cp.lastname
            specialization = ''
            sexe=cp.sexe
        elif(user.is_therapist == True):
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
        user = request.user
     
        # username= user.username
        # firstname = user.first_name
        # lastname = user.last_name
        # email = user.email
        # city = user.city
        # country = user.country

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
    
