# Generated by Django 4.2.1 on 2023-05-19 06:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=15, unique=True, validators=[django.core.validators.RegexValidator(message="El número de teléfono debe estar en el formato: '+999999999'.", regex='^\\+?1?\\d{9,15}$')])),
                ('email', models.EmailField(max_length=254)),
            ],
            options={
                'verbose_name': 'sucursal',
                'verbose_name_plural': 'sucursales',
                'db_table': 'sucursal',
            },
        ),
    ]
