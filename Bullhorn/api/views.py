from django.shortcuts import render
from rest_framework import generics, status, viewsets
from .serializers import PostSerializer, UserProfileSerializer, FriendsSerializer
from django.contrib.auth.models import User

from .models import Post, UserProfile, Friends

class PostListView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class UserProfileView(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class FriendsView(viewsets.ModelViewSet):
    queryset = Friends.objects.all()
    serializer_class = FriendsSerializer



