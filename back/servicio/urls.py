from django.urls import path, include
from rest_framework import routers
from servicio import views


router=routers.DefaultRouter()
router.register(r'servicio',views.ServicioViewSet)

urlpatterns=[
    path('',include(router.urls)),
    path('api/servicio/<servicio>/',views.servicioList),
    path('api/servicio/<pk>/',views.servicioList),
    path('api/servicio/<pk>/update/',views.servicioList),
]