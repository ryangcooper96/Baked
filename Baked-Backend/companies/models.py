from django.db import models
from django.conf import settings

# Create your models here.

# Hygiene Rating
class HygieneRating(models.Model):
    rating = models.IntegerField()
    updated_at = models.DateTimeField(auto_now=True)

# Company
class Company(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    logo_image = models.ImageField()
    hero_image = models.ImageField()
    address_delivery = models.CharField(max_length=300)
    address_collection = models.CharField(max_length=300)
    address_billing = models.CharField(max_length=300)
    contact_phone = models.IntegerField()
    contact_email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    hygiene_rating_id = models.ForeignKey(
        HygieneRating, on_delete=models.CASCADE
    )

# Allergen
class Allergen(models.Model):
    name = models.CharField(100)

# Product
class Product(models.Model):
    company_id = models.ForeignKey(
        Company, on_delete=models.CASCADE
    )
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    image = models.ImageField()
    allergens = models.ForeignKey(Allergen, many=True)
    gluten_free = models.BooleanField(default=False)
    vegetarian = models.BooleanField(default=False)
    vegan = models.BooleanField(default=False)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# Line Item
class LineItem(models.Model):

    status_choices = (
        ('NOT STARTED','Not Started')
        ('BLOCKED','Blocked')
        ('WIP','Work In Progress')
        ('DONE','Done'),
    )

    product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE
    )
    status = models.CharField(choices=status_choices, max_length=11, default="NOT STARTED")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
