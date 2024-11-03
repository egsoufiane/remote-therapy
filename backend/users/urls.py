from django.urls import path
from .views import register_client, register_therapist
from .views import Home, Profile


urlpatterns = [
    # path('register/', register_view, name='register'),
    path('register_client/', register_client, name='register_client'),
    path('register_therapist/', register_therapist, name='register_therapist'),
    path('username/', Home.as_view(), name="username"),
    path('user/', Profile.as_view(), name="user"),

]