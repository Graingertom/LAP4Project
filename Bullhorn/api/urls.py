from posixpath import basename
from django.urls import path, include
from .views import PostListView, UserProfileView, FriendsView
from rest_framework import routers

#router = routers.DefaultRouter()
router = routers.SimpleRouter()
router.register(r'post', PostListView,basename = "Posts")
router.register(r'friends', FriendsView,basename = "Friend")
router.register(r'profile', UserProfileView,basename = "Profile")

urlpatterns = [
    path('', include(router.urls)),
]
