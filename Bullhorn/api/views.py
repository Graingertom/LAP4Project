from django.shortcuts import render
from rest_framework import generics, status, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import PostSerializer, UserProfileSerializer, FriendsSerializer
from django.contrib.auth.models import User

from .models import Post, UserProfile, Friends


#http://127.0.0.1:8000/api/post/?username=kelvin6118
class PostListView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['mainUser']
    
    

class UserProfileView(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['mainUser', 'displayName']

class FriendsView(viewsets.ModelViewSet):
    queryset = Friends.objects.all()
    serializer_class = FriendsSerializer
    filterset_fields = ['mainUser']
    




