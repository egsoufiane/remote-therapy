# Generated by Django 5.1.2 on 2024-10-29 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_customuser_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='therapistprofile',
            name='experience_years',
            field=models.PositiveIntegerField(blank=True),
        ),
    ]
