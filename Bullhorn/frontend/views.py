from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# add login require
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

