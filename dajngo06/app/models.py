from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=255)
    tel = models.CharField(max_length=40)
    token = models.CharField(max_length=256,default='')
    icon = models.CharField(max_length=40,default='mine.png')
