from django.shortcuts import render
from rest_framework import generics, status, viewsets, filters
from .serializers import PostSerializer, UserProfileSerializer, FriendsSerializer
from django.contrib.auth.models import User

from .models import Post, UserProfile, Friends


#http://127.0.0.1:8000/api/post/?username=kelvin6118
class PostListView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    def get_queryset(self):
        queryset = Post.objects.all()
        username = self.request.query_params.get('username')
        if username is not None:
            queryset = queryset.filter(mainUser=username)
        return queryset

class UserProfileView(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    def get_queryset(self):
        queryset = UserProfile.objects.all()
        username = self.request.query_params.get('username')
        if username is not None:
            queryset = queryset.filter(mainUser=username)
        return queryset

class FriendsView(viewsets.ModelViewSet): 
    serializer_class = FriendsSerializer
    def get_queryset(self):
        queryset = Friends.objects.all()
        username = self.request.query_params.get('username')
        if username is not None:
            queryset = queryset.filter(mainUser=username)
        return queryset




