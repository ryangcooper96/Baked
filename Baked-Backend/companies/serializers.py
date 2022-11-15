from rest_framework import serializers
from .models import Company, HygieneRating, Allergen, Product, LineItem

class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = '__all__'


class HygieneRatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = HygieneRating
        fields = '__all__'


class AllergenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Allergen
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class LineItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = LineItem
        fields = '__all__'
