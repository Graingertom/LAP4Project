from posixpath import basename
from django.urls import path, include
from .views import PostListView, UserProfileView, FriendsView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

#router = routers.DefaultRouter()
router = routers.SimpleRouter()
router.register(r'post', PostListView,basename = "Posts")
router.register(r'friends', FriendsView,basename = "Friend")
router.register(r'profile', UserProfileView,basename = "Profile")

urlpatterns = [
    path('', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
