from django.db import models

# Create your models here.
from django.db.models import Manager


class AnimalManager(Manager):
    # 重写
    def all(self):
        return super().all().exclude(is_del=True)


class Animal(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    # 逻辑删除
    is_del = models.BooleanField(default=False)
    myobjects = AnimalManager()

# 一对一
# 人
class Person(models.Model):
    p_name = models.CharField(max_length=40)

# 身份证
# 从表声明关系
class IDcard(models.Model):
    i_no = models.CharField(max_length=40)
    # 性别(1:男 2:女)
    i_sex = models.IntegerField()
    # 地址
    i_add = models.CharField(max_length=100)

    # 声明关系
    i_person = models.OneToOneField(Person)

    # 删除模式
    # 默认主数据删除,及联数据也删除 models.CASCADE
    #　保护模式　主表删除及联数据，抛出　＇Ｐrotectederror
    # 置空模式  models.SET_NULL,null=True
    # models.SET_DEFAULT  默认模式

