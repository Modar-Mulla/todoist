# Generated by Django 4.1 on 2022-08-05 14:27

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0007_tasksmodel_task_reminder'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='birth_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]