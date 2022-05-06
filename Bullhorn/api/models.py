from django.db import models
import base64

# Create your models here.
class Post(models.Model):
    user = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    _audio = models.TextField(
        db_column='audio',
        blank=True
    )

    def set_audio(self, audio):
        self._audio = base64.encodestring(audio)

    def get_audio(self):
        return base64.decodestring(self._audio)

    audio = property(get_audio, set_audio)

class UserProfile(models.Model):
    displayName = models.CharField(max_length=50, unique=True)
    ProfileImg = models.CharField(max_length=100)

class Friends(models.Model):
    mainUser = models.ForeignKey(UserProfile, null=True, on_delete=models.SET_NULL)
    friends = models.CharField(max_length=50)

# def query():
#     Friends.objects.filter(mainUser__displayName='lala', friends="friend1")
