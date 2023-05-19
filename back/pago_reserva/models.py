from django.db import models
from reserva.models import Reserva


# Create your models here.


class PagoReserva(models.Model):
    fecha = models.DateTimeField()
    total = models.DecimalField(max_digits=6, decimal_places=2)

    ESTADOS_RESERVA = (
        ('pendiente', 'Pendiente'),
        ('confirmado', 'Confirmado'),
        ('cancelado', 'Cancelado'),
    )
    estado_pago = models.CharField(max_length=20, choices=ESTADOS_RESERVA)
    reserva = models.OneToOneField(Reserva, on_delete=models.CASCADE)

    class Meta:
        db_table = "pagoreserva"
        verbose_name_plural = "pagoreservas"
        verbose_name = "pagoreserva"

    def __str__(self):
        return self.estado_pago
