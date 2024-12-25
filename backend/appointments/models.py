from django.db import models
from users.models import CustomUser, ClientProfile, TherapistProfile

# Create your models here.


class Appointment(models.Model):

    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("confirmed", "Confirmed"),
        ("completed", "Completed"),
        ("canceled", "Canceled"),
    ]

    client = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="appointments_as_client")
    therapist = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="appointments_as_therapist")
    date = models.DateField()
    start_time = models.TimeField() 
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="pending")
    notes = models.TextField(blank=True, null=True)

    class Meta:
        unique_together=('therapist', 'date', 'start_time')

    def __str__(self):
        return f"Appointment ({self.client.username} with {self.therapist.username} on {self.date} at {self.start_time})"
    
     
