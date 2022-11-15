from django.contrib import admin
from .models import HygieneRating, Company, Allergen, Product, LineItem

# Register your models here.
admin.site.register(HygieneRating)
admin.site.register(Company)
admin.site.register(Allergen)
admin.site.register(Product)
admin.site.register(LineItem)