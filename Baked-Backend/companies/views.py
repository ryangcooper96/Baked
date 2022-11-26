from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Company, Product, LineItem
from .serializers import CompanySerializer, ProductSerializer, LineItemSerializer

# Create your views here.

class CompanyRetrieve(RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (IsAuthenticated, )

class CompanyCreate(CreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (IsAuthenticated, )


class CompanyDetail(RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (IsAuthenticated, )



# Products
class ProductList(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# Line Items
class LineItemList(CreateAPIView):
    queryset = LineItem.objects.all()
    serializer_class = LineItemSerializer

class LineItemDetail(RetrieveUpdateDestroyAPIView):
    queryset = LineItem.objects.all()
    serializer_class = LineItemSerializer


