# Generated by Django 4.2.1 on 2023-05-19 05:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('producto', '0003_alter_producto_table'),
        ('venta', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='VentaDetalle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precio', models.DecimalField(decimal_places=2, max_digits=6)),
                ('cantidad', models.IntegerField(default=0)),
                ('descuento', models.DecimalField(decimal_places=2, max_digits=5)),
                ('producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='producto.producto')),
                ('venta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='venta.venta')),
            ],
            options={
                'verbose_name': 'ventadetalle',
                'verbose_name_plural': 'ventadetalles',
                'db_table': 'ventadetalle',
            },
        ),
    ]
