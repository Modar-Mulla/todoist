# Generated by Django 4.1.1 on 2022-10-02 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0021_alter_reactionsmodel_emoji'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reactionsmodel',
            name='emoji',
            field=models.CharField(max_length=50),
        ),
    ]
