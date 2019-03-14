from django.db import models


# Create your models here.

class Lunbo(models.Model):
    img = models.CharField(max_length=256)
    name = models.ImageField()


class User(models.Model):
    uphone = models.CharField(max_length=100, unique=True)
    uname = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    token = models.CharField(max_length=255)
