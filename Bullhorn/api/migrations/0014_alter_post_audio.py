# Generated by Django 4.0.4 on 2022-05-10 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_rename__audio_post_audio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='audio',
            field=models.TextField(blank=True, db_column='audio'),
        ),
    ]
