# Generated by Django 4.2.1 on 2023-05-19 06:05

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0002_alter_cliente_user_alter_empleado_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vehiculo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelo', models.CharField(max_length=100)),
                ('imagen', models.ImageField(upload_to='photos/%Y/%m/')),
                ('tipo', models.CharField(max_length=100)),
                ('date_created', models.DateTimeField(default=datetime.datetime.now)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.cliente')),
            ],
            options={
                'verbose_name': 'vehiculo',
                'verbose_name_plural': 'vehiculos',
                'db_table': 'vehiculo',
            },
        ),
    ]