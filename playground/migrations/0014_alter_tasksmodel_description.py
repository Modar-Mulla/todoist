# Generated by Django 4.1.1 on 2022-10-01 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0013_alter_tasksmodel_task_happen_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasksmodel',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
