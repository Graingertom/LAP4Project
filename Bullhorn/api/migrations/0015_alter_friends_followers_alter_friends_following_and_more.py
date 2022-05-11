# Generated by Django 4.0.4 on 2022-05-11 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_userprofile_main_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friends',
            name='followers',
            field=models.TextField(blank=True, db_column='followers', null=True),
        ),
        migrations.AlterField(
            model_name='friends',
            name='following',
            field=models.TextField(blank=True, db_column='following', null=True),
        ),
        migrations.AlterField(
            model_name='friends',
            name='friends',
            field=models.TextField(blank=True, db_column='friends', null=True),
        ),
    ]