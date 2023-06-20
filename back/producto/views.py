from django.shortcuts import render
from rest_framework import viewsets,generics,status
from .serializer import ProductoSerializer
from .models import Producto
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from rest_framework.response import Response



class ProductoViewSet(viewsets.ModelViewSet):
    queryset=Producto.objects.all()
    serializer_class=ProductoSerializer

class ProductoUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=Producto.objects.all()
    serializer_class=ProductoSerializer

@csrf_exempt   #
@api_view(['GET', 'POST','PUT','DELETE'])
def productoList(request, format=None):
    '''
    List all code snippets, or create a new snippet.
    Enumere todos los fragmentos de código o cree uno nuevo.
    '''
    if request.method == 'GET':
        producto = Producto.objects.all()
        serializer = ProductoSerializer(producto, many=True)
        # return JsonResponse(serializer.data, safe=False)
        return Response(serializer.data)


    elif request.method == 'POST':
        
        # data = JSONParser().parse(request)    
        # data.imagen=request.FILES.get('imagen')
        # serializer = SnippetSerializer(data=data)     #1
      
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'PUT':
       
        serializer = ProductoSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
    elif request.method == 'DELETE':
        producto.delete()
        # return HttpResponse(status=204)    #1
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
