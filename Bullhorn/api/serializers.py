from rest_framework import serializers
from .models import Post, UserProfile, Friends

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'main_user', 'title', 'audio')

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'main_user', 'display_name', 'profile_img', "discription")

class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = ('id', 'main_user', 'friends', 'following', 'followers')
