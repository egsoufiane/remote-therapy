# Generated by Django 5.1.2 on 2024-11-20 19:57

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_remove_therapistprofile_available_slots_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='therapistavailability',
            name='date',
        ),
        migrations.RemoveField(
            model_name='therapistavailability',
            name='is_booked',
        ),
        migrations.AddField(
            model_name='therapistavailability',
            name='day_of_week',
            field=models.CharField(blank=True, choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=9),
        ),
        migrations.CreateModel(
            name='SpecificDayAvailability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('is_available', models.BooleanField(default=True)),
                ('therapist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('therapist', 'date', 'start_time', 'end_time')},
            },
        ),
    ]
