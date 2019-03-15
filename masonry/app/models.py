from django.db import models


# Create your models here.
# 轮播图
class Lunbo(models.Model):
    img = models.CharField(max_length=256)
    name = models.ImageField()


# 用户表
class User(models.Model):
    uphone = models.CharField(max_length=100, unique=True)
    uname = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    token = models.CharField(max_length=255)


# 商品展示
class Shoplist(models.Model):
    src = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    content1 = models.CharField(max_length=255)
    content2 = models.CharField(max_length=255)
    content3 = models.CharField(max_length=255)
    content4 = models.CharField(max_length=255)


# 关联用户表
class Order(models.Model):
    user = models.ForeignKey(User)
    createtime = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(default=0)
    idenrifier = models.CharField(max_length=255)


class OrderShop(models.Model):
    order = models.ForeignKey(Order)
    shoplist = models.ForeignKey(Shoplist)
    number = models.IntegerField()


# 购物车
class Cart(models.Model):
    user = models.ForeignKey(User)
    shoplist = models.ForeignKey(Shoplist)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)
