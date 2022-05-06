from rest_framework import serializers
from .models import Post, UserProfile, Friends

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'audio')
