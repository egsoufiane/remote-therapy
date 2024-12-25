from django.contrib import admin

# Register your models here.

from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, ClientProfile, TherapistProfile, TherapistAvailability, SpecificDayAvailability

# @admin.register(CustomUser)
# class CustomUserAdmin(UserAdmin):
#     model = CustomUser
#     list_display = ('username', 'email', 'first_name', 'last_name', 'role', 'city','state', 'country', 'is_staff', 'is_verified', 'is_active')
#     list_filter = ('is_staff', 'is_active', 'is_verified', 'role', 'city','state', 'country')
#     search_fields = ('username','email', 'first_name', 'last_name', 'city','state', 'country')
#     ordering = ('email',)
#     fieldsets = (
#         (None, {'fields': ('username','email', 'password')}),
#         ('Personal Info', {'fields': ('first_name', 'last_name', 'city', 'country')}),
#         ('Permissions', {'fields': ('role', 'is_staff','is_verified', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('username','email', 'first_name', 'last_name', 'role', 'city', 'state', 'country', 'password1', 'password2', 'is_staff','is_verified', 'is_active')}
#         ),
#     )


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('id','username','email','is_client','is_therapist','is_staff', 'is_verified', 'is_active')
    list_filter = ('is_client','is_therapist','is_staff', 'is_active', 'is_verified')
    search_fields = ('username','email')
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('username','email', 'password')}),
        ('Permissions', {'fields': ('is_client', 'is_therapist', 'is_staff','is_verified', 'is_active', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username','email', 'password1', 'password2', 'is_staff','is_verified', 'is_active')}
        ),
    )


# @admin.register(ClientProfile)
# class ClientProfileAdmin(admin.ModelAdmin):
#     model = ClientProfile
#     list_display = ('first_name','last_name','birthday','sexe','city', 'state', 'country')
#     list_filter = ('first_name','last_name','birthday','sexe','city', 'state', 'country' ,'user_id')
#     search_fields = ('first_name','last_name','user_id')
#     ordering = ('first_name',)
#     fieldsets = (
#         (None, {'fields': ('first_name','last_name','user_id')}),
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('first_name','last_name','birthday','sexe','city', 'state', 'country' ,'user_id')}
#         ),
#     )


# admin.site.register(ClientProfile)


@admin.register(ClientProfile)
class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('id','firstname', 'lastname', 'birthday', 'sexe', 'city', 'state', 'country','user','selected_therapist')
    search_fields = ('firstname', 'lastname')
    
@admin.register(TherapistProfile)
class TherapistProfileAdmin(admin.ModelAdmin):
    list_display = ('id','firstname', 'lastname', 'birthday', 'sexe', 'city', 'state', 'country','user')
    search_fields = ('firstname', 'lastname')


@admin.register(TherapistAvailability)
class TherapistAvailabilityAdmin(admin.ModelAdmin):
    list_display = ('id','day_of_week','therapist', 'start_time', 'end_time', 'is_available')
    search_fields = ('id','therapist', 'date')


@admin.register(SpecificDayAvailability)
class TherapistAvailabilityAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'therapist', 'start_time', 'end_time', 'is_available')
    search_fields = ('id','therapist', 'date')

