# Generated by Django 5.1.2 on 2024-11-30 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_alter_therapistavailability_end_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='therapistavailability',
            name='end_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='therapistavailability',
            name='start_time',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
