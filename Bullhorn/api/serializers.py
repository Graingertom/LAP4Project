from rest_framework import serializers
from .models import Post, UserProfile, Friends
from rest_framework.parsers import MultiPartParser, FormParser

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'main_user', 'title', 'audio')

class UserProfileSerializer(serializers.ModelSerializer):
    parser_classes = (MultiPartParser, FormParser)
    class Meta:
        model = UserProfile
        fields = ('id', 'main_user', 'display_name', 'profile_img', "discription")

class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = ('id', 'main_user', 'friends', 'following', 'followers')
