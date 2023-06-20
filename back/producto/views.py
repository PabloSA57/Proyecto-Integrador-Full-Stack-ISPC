from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializer import ProductoSerializer
from .models import Producto


class ProductoViewSet(viewsets.ModelViewSet):
    print("producto")
    permission_classes = [AllowAny]
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
