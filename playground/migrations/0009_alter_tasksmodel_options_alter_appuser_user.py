# Generated by Django 4.1 on 2022-08-10 19:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('playground', '0008_appuser_birth_date'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='tasksmodel',
            options={'ordering': ['id']},
        ),
        migrations.AlterField(
            model_name='appuser',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='app_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
