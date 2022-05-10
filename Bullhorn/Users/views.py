from django.shortcuts import render, redirect
from .forms import UserSignupForm
from django.contrib.auth import login, authenticate

def signup(req):
    if req.method == 'POST':
        form = UserSignupForm(req.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user =  authenticate(req,username=username, password=password)
            if user:
                login(req, user)
                return redirect('/create')
    else:
        form = UserSignupForm()
    data = {'form': form}
    return render(req, 'users/signup.html', data)
