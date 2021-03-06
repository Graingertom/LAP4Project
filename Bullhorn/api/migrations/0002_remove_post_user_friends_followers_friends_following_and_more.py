# Generated by Django 4.0.4 on 2022-05-09 10:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='user',
        ),
        migrations.AddField(
            model_name='friends',
            name='followers',
            field=models.TextField(blank=True, db_column='followers'),
        ),
        migrations.AddField(
            model_name='friends',
            name='following',
            field=models.TextField(blank=True, db_column='following'),
        ),
        migrations.AddField(
            model_name='post',
            name='mainUser',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='mainUser',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='friends',
            name='friends',
            field=models.TextField(blank=True, db_column='friends'),
        ),
        migrations.AlterField(
            model_name='friends',
            name='mainUser',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]
