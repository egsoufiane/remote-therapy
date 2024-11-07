from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.utils import timezone
from .models import CustomUser, ClientProfile, TherapistProfile



# Login using username or email

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    username = serializers.CharField()
    
    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if('@' in username):
            user = CustomUser.objects.get(email=username)
            attrs['username'] = user.username
        else:
            user = CustomUser.objects.get(username=username)
            attrs['username'] = user.username

        
        user = authenticate(request=self.context.get('request'), username=attrs['username'], password=password)
        

        if not user:
            raise serializers.ValidationError('Invalid email or password')
        
        # Update the last_login field for the authenticated user
        user.last_login = timezone.now()
        user.save(update_fields=['last_login'])

        data = super().validate(attrs)

        data = super().validate(attrs)
        data['is_client'] = user.is_client
        data['is_therapist'] = user.is_therapist

        return data




#Login user email

# class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
#     email = serializers.EmailField()

#     def validate(self, attrs):
#         email = attrs.get('email')
#         password = attrs.get('password')

#         user = authenticate(request=self.context.get('request'), email=email, password=password)

#         if not user:
#             raise serializers.ValidationError('Invalid email or password')
        
#         # Update the last_login field for the authenticated user
#         user.last_login = timezone.now()
#         user.save(update_fields=['last_login'])

#         data = super().validate(attrs)

#         data = super().validate(attrs)
#         data['is_client'] = user.is_client
#         data['is_therapist'] = user.is_therapist

#         return data


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        # fields = [
        #     'id', 
        #     'email', 
        #     'username', 
        #     'is_client',
        #     'is_therapist'
        # ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

class ClientProfileSerializer(serializers.ModelSerializer):
     class Meta:
        model = ClientProfile
        # fields = [
        #     'first_name', 
        #     'last_name',
        #     'birthday',
        #     'sexe', 
        #     'city', 
        #     'state', 
        #     'country', 
        #     'favorite_therapists',
        #     'is_active', 
        #     'is_verified', 
        #     'is_staff'
        # ]
        fields = '__all__'



class TherapistProfileSerializer(serializers.ModelSerializer):
     class Meta:
        model = TherapistProfile
        fields = '__all__'
        # fields = [
        #     'first_name', 
        #     'last_name',
        #     'birthday',
        #     'sexe', 
        #     'city', 
        #     'state', 
        #     'country', 
        #     'specialization',
        #     'experience_years',
        #     'available_slots',
        #     'ratings',
        #     'is_active', 
        #     'is_verified', 
        #     'is_staff'
        # ]
