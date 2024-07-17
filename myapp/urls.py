# mainapp/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_view, name='login'),
    path('land-inventory/', views.land_inventory, name='land_inventory'),
]
