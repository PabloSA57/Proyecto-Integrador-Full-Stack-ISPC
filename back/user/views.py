from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import UserSerializer

# Create your views here.


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


@api_view(['POST'])
def login(request):
    email = request.data.get("email", None)
    password = request.data.get("password", None)
    user = authenticate(email=email, password=password)

    token = get_tokens_for_user(user)
    if user:

        return Response(data={"access_token": token.get('access'), "refresh_token": token.get("refresh")}, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(data={"message": "El usuario se registro correctamente"})
    return Response(status=status.HTTP_404_NOT_FOUND)
