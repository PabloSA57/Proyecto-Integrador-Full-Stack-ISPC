from django.shortcuts import render

# Create your views here.


from rest_framework import viewsets
from .serializer import ProductoSerializer
from .models import Producto



class ProductoViewSet(viewsets.ModelViewSet):
    queryset=Producto.objects.all()
    serializer_class=ProductoSerializer

