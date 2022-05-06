from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(req):
    return HttpResponse("<h1>React app goes here</h1><div id=root></div>")
