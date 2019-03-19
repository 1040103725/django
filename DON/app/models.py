from django.db import models


class lunbotu(models.Model):
    data = models.CharField(max_length=256)
    name = models.IntegerField()


class User(models.Model):
    uphone = models.CharField(max_length=100, unique=True)
    uname = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    token = models.CharField(max_length=255)


class Shoplist(models.Model):
    src = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    content1 = models.CharField(max_length=255)
    content2 = models.CharField(max_length=255)


class Cart(models.Model):
    user = models.ForeignKey(User)
    shoplist = models.ForeignKey(Shoplist)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)


class Order(models.Model):
    user = models.ForeignKey(User)
    createtime = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(default=0)
    idenrifier = models.CharField(max_length=255)


class OrderShop(models.Model):
    order = models.ForeignKey(Order)
    shoplist = models.ForeignKey(Shoplist)
    number = models.IntegerField()
