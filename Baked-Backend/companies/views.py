from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Company, Product, LineItem
from .serializers import CompanySerializer, ProductSerializer, LineItemSerializer

# Create your views here.

# Companies
class CompanyList(ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


# Products
class ProductList(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# Line Items
class LineItemList(ListCreateAPIView):
    queryset = LineItem.objects.all()
    serializer_class = LineItemSerializer

class LineItemDetail(RetrieveUpdateDestroyAPIView):
    queryset = LineItem.objects.all()
    serializer_class = LineItemSerializer


