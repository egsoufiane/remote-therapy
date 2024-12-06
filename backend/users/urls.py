from django.urls import path
from .views import register_client, register_therapist, get_recurring_schedule
from .views import Home, Profile, ScheduleAvailability, SpecialAvailability, OneDayAvaialbility

urlpatterns = [
    # path('register/', register_view, name='register'),
    path('register_client/', register_client, name='register_client'),
    path('register_therapist/', register_therapist, name='register_therapist'),
    path('username/', Home.as_view(), name="username"),
    path('user/', Profile.as_view(), name="user"),
    path('schedule_availability/', ScheduleAvailability.as_view(), name="schedule_availability"),
    path('special_availability/', SpecialAvailability.as_view(), name="special_availability"),
    path('specific_day_availability/', OneDayAvaialbility.as_view(), name="specific_day_availability"),
    path('recurring_schedule/', get_recurring_schedule, name='recurring_schedule'),


]