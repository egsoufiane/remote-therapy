# Create your models here.

from django.contrib.auth.models import AbstractUser
from django.db import models

from django.contrib.auth.models import BaseUserManager, PermissionsMixin
from django.db import models

# class CustomUser(AbstractUser):
#     USERNAME_FIELD = 'email'
#     username = models.CharField(max_length=30)
#     email = models.EmailField(unique=True)
#     first_name = models.CharField(max_length=30, blank=True)
#     last_name = models.CharField(max_length=30, blank=True)
#     birthday = models.DateField(default='2000-01-01') 
#     sexe = models.CharField(max_length=6, blank=True)
#     city = models.CharField(max_length=100, blank=True)     # Add city field
#     state = models.CharField(max_length=255, blank=True)  # Add state field
#     country = models.CharField(max_length=100, blank=True)  # Add country field
#     role = models.CharField(max_length=1, blank=True)
#     is_active = models.BooleanField(default=True)
#     is_verified = models.BooleanField(default=False)
#     is_staff = models.BooleanField(default=False)
    
#     REQUIRED_FIELDS = ['username']
    
#     def save(self, *args, **kwargs):
#     # Ensure that is_verified is True for superusers
#         if self.is_superuser:
#             self.is_verified = True
#         super().save(*args, **kwargs)

#     def __str__(self):
#         return self.email


# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
        
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)

#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#         # extra_fields.setdefault('is_verified', True)
#         # extra_fields['is_verified'] = True
 
#         extra_fields['is_verified'] = True
  
     
#         if extra_fields.get('is_staff') is not True:
#             raise ValueError('Superuser must have is_staff=True.')
#         if extra_fields.get('is_superuser') is not True:
#             raise ValueError('Superuser must have is_superuser=True.')

#         return self.create_user(email, password, **extra_fields)





class CustomUser(AbstractUser):
    USERNAME_FIELD = 'email'
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)
    first_name = None
    last_name = None
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_client = models.BooleanField(default=False)
    is_therapist = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['username']
    
    def save(self, *args, **kwargs):
    # Ensure that is_verified is True for superusers
        if self.is_superuser:
            self.is_verified = True
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email

class ClientProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    # Add client-specific fields here

    firstname = models.CharField(max_length=30, blank=True)
    lastname = models.CharField(max_length=30, blank=True)
    birthday = models.DateField(blank=True) 
    sexe = models.CharField(max_length=6, blank=True)
    city = models.CharField(max_length=100, blank=True)     # Add city field
    state = models.CharField(max_length=255, blank=True)  # Add state field
    country = models.CharField(max_length=100, blank=True)  # Add country field
    # favorite_therapist = models.ManyToManyField('TherapistProfile', blank=True, related_name='clients') #Relation between CP and TP

class TherapistProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    # Add therapist-specific fields here

    firstname = models.CharField(max_length=30, blank=True)
    lastname = models.CharField(max_length=30, blank=True)
    birthday = models.DateField(blank=True) 
    sexe = models.CharField(max_length=6, blank=True)
    city = models.CharField(max_length=100, blank=True)     # Add city field
    state = models.CharField(max_length=255, blank=True)  # Add state field
    country = models.CharField(max_length=100, blank=True)  # Add country field
    ratings = models.IntegerField(default=0)
    specialization = models.CharField(max_length=255)
    bio = models.CharField(max_length=600, blank=True, null=True)
    experience_years = models.PositiveIntegerField(blank=True, null=True)
    available_slots = models.JSONField(default=dict) 
    



class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        # extra_fields.setdefault('is_verified', True)
        # extra_fields['is_verified'] = True
 
        extra_fields['is_verified'] = True
  
     
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)