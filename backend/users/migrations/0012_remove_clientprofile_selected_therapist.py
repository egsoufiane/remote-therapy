# Generated by Django 5.1.2 on 2024-12-11 23:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_clientprofile_selected_therapist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientprofile',
            name='selected_therapist',
        ),
    ]
