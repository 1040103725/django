from django.db import models


# Create your models here.
class Animal(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=40)

    class Meta:
        abstract = True


class Dog(models.Model):
    eat = models.CharField(max_length=100)
    speak = models.CharField(max_length=100)


class Cat(models.Model):
    eat = models.CharField(max_length=100)


class Fish(models.Model):
    swin = models.CharField(max_length=100)


class Snake(models.Model):
    sleep = models.CharField(max_length=100)
