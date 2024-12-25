from django.contrib import admin
from .models import Appointment
from users.models import CustomUser

# Register your models here.

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'client', 'therapist','date','start_time', 'status', 'notes')
    search_fields = ('id','therapist', 'client', 'date', 'status')

    # seprate list based on role
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        
        # Filter clients: Only users with is_client=True
        form.base_fields['client'].queryset = CustomUser.objects.filter(is_client=True)
        
        # Filter therapists: Only users with is_therapist=True
        form.base_fields['therapist'].queryset = CustomUser.objects.filter(is_therapist=True)
    
        return form
