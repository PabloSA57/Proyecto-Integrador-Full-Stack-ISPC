# Generated by Django 4.2.1 on 2023-06-19 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('producto', '0004_alter_producto_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(upload_to='photos/%Y/%m/'),
        ),
    ]
