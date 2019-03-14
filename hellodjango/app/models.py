from django.db import models

# Create your models here.
'''
- CharField 字符串
- IntegerField 整形
- AutoField  自增长(整形)
- FloatField  浮点数
- TextField 字符串(大文本)
- BooleanField  布尔类型
- DateField 日期
- TimeFeld 时间
- DateTimeField 时间日期
- auto_now_add 记录被创建的时间

# 约束
- primary_key 主键
- max_length  最大长度
- null 是否为空(默认是不能为空)
- auto_now 每次更新的时间
- auto_now_add 被创建的时间
- max_digits  总长度
- decimal_places  小数点保留几位
- blank 是否为空
- default 默认值
'''


class Student(models.Model):
    s_id = models.AutoField(primary_key=True,)
    s_name = models.CharField(max_length=100)
    s_score = models.IntegerField(null=True)
    s_weight = models.FloatField(null=True)
    s_height = models.DecimalField(max_digits=6,decimal_places=1)
    s_detail = models.TextField(default='')
    s_delete = models.BooleanField(default=False)
    s_create = models.DateTimeField(auto_now_add=True)
    s_change = models.DateTimeField(auto_now=True)
    s_test = models.IntegerField(null=True)