# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-11 09:45
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_shoplist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shoplist',
            name='name1',
        ),
    ]