# Generated by Django 4.0.4 on 2022-05-10 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_userprofile_discription'),
    ]

    operations = [
        migrations.AddField(
            model_name='friends',
            name='test',
            field=models.TextField(blank=True, db_column='test'),
        ),
    ]
