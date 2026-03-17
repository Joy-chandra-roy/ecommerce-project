from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from apps.products.models import Product
from apps.products.pagination import ProductPagination
from apps.products.serializers import ProductSerializer
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.
# class ProductList(
    
#     mixins.ListModelMixin, 
#     mixins.CreateModelMixin, 
#     generics.GenericAPIView,
   
    
# ):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)
    

# class ProductDetail(
#     mixins.RetrieveModelMixin,
#     mixins.UpdateModelMixin,
#     mixins.DestroyModelMixin,
#     generics.GenericAPIView,
    
# ):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

#     def get(self, request, *args, **kwargs):
#         return self.retrieve(request,pk, *args, **kwargs)

#     def put(self, request, *args, **kwargs):
#         return self.update(request,pk, *args, **kwargs)

#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, pk, *args, **kwargs)





class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends=[
        SearchFilter,
        OrderingFilter,
        DjangoFilterBackend
        
    ]
    
    search_fields=['name', 'description']
    filterset_fields=['price', "is_available",'is_featured']
    ordering_fields=['price', 'create_at', 'update_at', 'name']
    ordering=['price']
    pagination_class=ProductPagination
    
    
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer