from django.urls import path
from .views import index
from . import views

urlpatterns = [
    path('app', index, name="Bullhorn_App"),
    path('', views.base, name="User_Auth"),
]
