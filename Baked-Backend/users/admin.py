from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_from = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = [
        "email",
        "username",
        "first_name",
        "last_name",
        "is_staff",
    ]
    fieldsets = UserAdmin.fieldsets + \
        ((None, {"fields": ("is_company", "is_customer", "is_courier")}),)
    add_fieldsets = UserAdmin.add_fieldsets + \
        ((None, {"fields": ("is_company", "is_customer", "is_courier")}),)


admin.site.register(CustomUser, CustomUserAdmin)
