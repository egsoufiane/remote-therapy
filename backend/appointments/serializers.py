from .models import Appointment
from rest_framework import serializers

class AppointmentSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

