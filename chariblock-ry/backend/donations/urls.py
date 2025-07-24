from django.urls import path
from . import views

urlpatterns = [
    path('', views.record_donation, name='record_donation'),
    path('list/', views.list_donations, name='list_donations'),
    path('<int:donation_id>/', views.get_donation, name='get_donation'),
]