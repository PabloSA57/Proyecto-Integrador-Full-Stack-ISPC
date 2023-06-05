from django.shortcuts import render

from rest_framework import viewsets
from .serializer import ServicioSerializer
from .models import Servicio

# Create your views here.

class ServicioViewSet(viewsets.ModelViewSet):
    queryset=Servicio.objects.all()
    serializer_class=ServicioSerializer

