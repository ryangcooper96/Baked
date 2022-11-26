from django.db import models
from django.conf import settings
from rest_framework.parsers import MultiPartParser, FormParser
import uuid
# Create your models here.


def upload_to(instance, filename):
    ext = filename.split('.')[-1]
    print(uuid.uuid4)
    print(uuid.uuid4())
    print(str(uuid.uuid4()))
    return 'images/{}_{}.{}'.format(instance.user.id,str(uuid.uuid4()),ext)

# Company
class Company(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, unique=True, on_delete=models.PROTECT)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    logo_image = models.ImageField(upload_to=upload_to,blank=True,null=True)
    # logo_image = models.CharField(max_length=200, blank=True)
    hero_image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    # hero_image = models.CharField(max_length=200, blank=True)
    address_delivery = models.CharField(max_length=300)
    address_collection = models.CharField(max_length=300)
    address_billing = models.CharField(max_length=300)
    contact_phone = models.CharField(max_length=15)
    contact_email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "%s - %s" % (self.name, self.created_at)


class HygieneRating(models.Model):
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    company = models.OneToOneField(Company, on_delete=models.CASCADE)

    def __str__(self):
        return "%s - %s (%s)" % (self.company.name, self.rating, self.updated_at)


# Allergen
class Allergen(models.Model):
    name = models.CharField(max_length=120)

    def __str__(self):
        return self.name


# Product
class Product(models.Model):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE
    )
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    image = models.ImageField()
    allergens = models.ManyToManyField(Allergen)
    gluten_free = models.BooleanField(default=False)
    vegetarian = models.BooleanField(default=False)
    vegan = models.BooleanField(default=False)
    available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "%s (GF: %s, V: %s, Vg: %s)" % (self.name, self.gluten_free, self.vegetarian, self.vegan)


# Line Item
class LineItem(models.Model):
    status_choices = (
        ('NOT STARTED','Not Started'),
        ('BLOCKED','Blocked'),
        ('WIP','Work In Progress'),
        ('DONE','Done'),
    )

    product = models.ForeignKey(
        Product, on_delete=models.CASCADE
    )
    status = models.CharField(choices=status_choices, max_length=11, default="NOT STARTED")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "%s - %s" % (self.product.name, self.status)
