from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USER_TYPE_CHOICES = (
        ('donor', 'Donor'),
        ('charity_creator', 'Charity Creator'),
    )
    
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)

class CharityCreator(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    organization_name = models.CharField(max_length=255)
    wallet_address = models.CharField(max_length=255)

class Donor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    wallet_address = models.CharField(max_length=255)