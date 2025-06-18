from django.urls import path
from .views import (
    charity_creator_signup,
    donor_signup,
    charity_creator_login,
    donor_login,
    logout_view,
)

urlpatterns = [
    path('charity-creator/signup/', charity_creator_signup, name='charity_creator_signup'),
    path('donor/signup/', donor_signup, name='donor_signup'),
    path('charity-creator/login/', charity_creator_login, name='charity_creator_login'),
    path('donor/login/', donor_login, name='donor_login'),
    path('logout/', logout_view, name='logout'),
]