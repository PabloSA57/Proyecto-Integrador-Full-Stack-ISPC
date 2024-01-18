from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets,generics,request,status
from .serializer import ServicioSerializer
from .models import Servicio
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse

# Create your views here.

# me trae todos los servicios
class ServicioViewSet(viewsets.ModelViewSet):
    queryset=Servicio.objects.all()
    serializer_class=ServicioSerializer

# elimina
class ServicioUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=Servicio.objects.all()
    serializer_class=ServicioSerializer


@csrf_exempt   #
@api_view(['GET', 'POST','PUT','DELETE'])
def servicioList(request, format=None):
    '''
    List all code snippets, or create a new snippet.
    Enumere todos los fragmentos de código o cree uno nuevo.
    '''
    if request.method == 'GET':
        servicio = Servicio.objects.all()
        serializer = ServicioSerializer(servicio, many=True)
        # return JsonResponse(serializer.data, safe=False)
        return Response(serializer.data)


    elif request.method == 'POST':
        
        # data = JSONParser().parse(request)    
        # data.imagen=request.FILES.get('imagen')
        # serializer = SnippetSerializer(data=data)     #1
      
        serializer = ServicioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'PUT':
       
        serializer = ServicioSerializer(servicio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'DELETE':
        servicio.delete()
        # return HttpResponse(status=204)    #1
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
