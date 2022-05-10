from rest_framework import serializers
from .models import Post, UserProfile, Friends

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'mainUser', 'title', 'audio')

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'mainUser', 'displayName', 'ProfileImg', "discription")

class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends
        fields = ('id', 'mainUser', 'friends', 'following', 'followers')
