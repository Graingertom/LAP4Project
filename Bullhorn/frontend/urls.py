from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name="Bullhorn_App"),
    path('profile', index),
    path('profile/<str:username>', index),
    path('create', index),
    path('edit', index),
    path('edit/image', index),
    path('new', index)
]
