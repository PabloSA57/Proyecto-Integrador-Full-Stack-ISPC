from django.urls import path, include
from rest_framework import routers
from servicio import views


router=routers.DefaultRouter()
router.register(r'servicio',views.ServicioViewSet)

urlpatterns=[
    path('',include(router.urls)),
]