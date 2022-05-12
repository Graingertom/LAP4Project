from email.policy import default
from django.db import models
from django.contrib.auth.models import User
import base64

# Create your models here.
User._meta.get_field('email')._unique = True

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Post(models.Model):
    main_user = models.ForeignKey(User, to_field="username", null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=50)
    audio = models.FileField(upload_to='audio/')

    #def set_audio(self, audio):
    #    self._audio = base64.encodestring(audio)

    #def get_audio(self):
    #    return base64.decodestring(self._audio)

    #audio = property(get_audio, set_audio)
    
class UserProfile(models.Model):
    main_user = models.ForeignKey(User, to_field="username", null=True, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=50, unique=True, default="User")
    profile_img = models.ImageField(upload_to=upload_to, blank=True, null=True, default="https://www.clipartmax.com/png/middle/318-3182943_admin-blank-user-profile.png")
    discription = models.TextField(db_column='discription', blank=True, default="Lets Introduce Yourself!")


class Friends(models.Model):
    main_user = models.ForeignKey(User, to_field="username", null=True, on_delete=models.SET_NULL)
    friends = models.TextField(
        db_column='friends',
        blank=True
    )
    following = models.TextField(
        db_column='following',
        blank=True
    )
    followers = models.TextField(
        db_column='followers',
        blank=True
    )


    



# def query():
#     Friends.objects.filter(main_user__displayName='lala', friends="friend1")
