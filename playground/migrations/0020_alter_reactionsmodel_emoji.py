# Generated by Django 4.1.1 on 2022-10-02 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0019_rename_user_commentsmodel_app_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reactionsmodel',
            name='emoji',
            field=models.CharField(max_length=50),
        ),
    ]
