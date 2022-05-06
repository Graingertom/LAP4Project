from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PostSerializer

from .models import Post

class PostListView(generics.ListAPIView):
    model = Post
    serializer_class = PostSerializer

