from django.contrib import admin
from .models import CharityCreator, Donor

admin.site.register(CharityCreator)
admin.site.register(Donor)