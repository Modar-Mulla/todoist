# Generated by Django 4.0.6 on 2022-07-29 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0003_tasksmodel_task_happen_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
