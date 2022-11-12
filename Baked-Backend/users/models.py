from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    first_name = models.CharField(null=True, blank=True, max_length=100)
    last_name = models.CharField(null=True, blank=True, max_length=100)
    is_customer = models.BooleanField(default=True)
    is_company = models.BooleanField(default=False)
    is_courier = models.BooleanField(default=False)