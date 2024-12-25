from django.urls import path
# from .views import register_client, register_therapist, get_therapists, get_recurring_schedule, get_therapist_schedule, get_assigned_therapist, set_assigned_therapist
# from .views import Home, Profile, ScheduleAvailability, SpecialAvailability, OneDayAvaialbility
from .views import AppointmentController, get_therapist_appointments, update_appointment, get_upcoming_session

urlpatterns = [
    # path('register/', register_view, name='register'),
    # path('register_client/', register_client, name='register_client'),
    # path('register_therapist/', register_therapist, name='register_therapist'),
    # path('username/', Home.as_view(), name="username"),
    # path('user/', Profile.as_view(), name="user"),
    # path('get_therapists/', get_therapists, name='get_therapists'),
    
    # path('schedule_availability/', ScheduleAvailability.as_view(), name="schedule_availability"),
    # path('special_availability/', SpecialAvailability.as_view(), name="special_availability"),
    # path('specific_day_availability/', OneDayAvaialbility.as_view(), name="specific_day_availability"),
    # path('recurring_schedule/', get_recurring_schedule, name='recurring_schedule'),

    # path('get_therapist_schedule/', get_therapist_schedule, name="get_therapist_schedule"),
    # path('get_assigned_therapist/', get_assigned_therapist, name=" get_assigned_therapist"),
    # path('set_assigned_therapist/', set_assigned_therapist, name=" set_assigned_therapist"),

    path('appointment/', AppointmentController.as_view(), name="appointment"),
    path('get_therapist_appointments/',  get_therapist_appointments, name="get_therapist_appointments"),
    path('update_appointment/', update_appointment, name='update_appointment'),
    path('get_upcoming_session/', get_upcoming_session, name='get_upcoming_session')
    
]