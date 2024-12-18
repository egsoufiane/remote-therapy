# Generated by Django 5.1.2 on 2024-11-08 02:34

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_therapistprofile_bio'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='therapistprofile',
            name='available_slots',
        ),
        migrations.CreateModel(
            name='TherapistAvailability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('is_available', models.BooleanField(default=True)),
                ('is_booked', models.BooleanField(default=False)),
                ('therapist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
