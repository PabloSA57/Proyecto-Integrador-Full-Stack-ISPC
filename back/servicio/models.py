from django.db import models
from categoria.models import Categoria
from datetime import datetime

# Create your models here.


class Servicio(models.Model):
    nombre = models.CharField(max_length=255)
    imagen = models.ImageField(upload_to='photos/')
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=6, decimal_places=3)
    fecha_creacion= models.DateTimeField(default=datetime.now)

    class Meta:
        db_table = "servicio"
        verbose_name_plural = "servicios"
        verbose_name = "servicio"

    def get_thumbnail(self):
        if self.imagen:
            return self.imagen.url
        return ''

    def __str__(self):
        return self.nombre
