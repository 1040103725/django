# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-09 12:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uphone', models.IntegerField()),
                ('password', models.CharField(max_length=255)),
                ('token', models.CharField(max_length=255)),
            ],
        ),
    ]
