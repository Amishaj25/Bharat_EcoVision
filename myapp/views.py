# myapp/views.py

from django.shortcuts import render, redirect
from .models import User

def index(request):
    return render(request, 'index.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST['id']
        password = request.POST['pass']
        try:
            user = User.objects.get(username=username)
            if user.password == password:
                # Authentication successful
                return redirect('index')
            else:
                # Incorrect password
                return redirect('login')  # Add error handling as needed
        except User.DoesNotExist:
            # User not found
            return redirect('login')  # Add error handling as needed
    return render(request, 'login.html')

def land_inventory(request):
    return render(request, 'land-inventory.html')
