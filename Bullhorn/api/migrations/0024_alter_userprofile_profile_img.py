# Generated by Django 4.0.4 on 2022-05-12 11:41

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_alter_userprofile_profile_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='profile_img',
            field=models.ImageField(blank=True, default='../../mediafiles/images/default.jpg', null=True, upload_to=api.models.upload_to),
        ),
    ]