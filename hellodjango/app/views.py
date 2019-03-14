import random

from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from app.models import Student


def index(request):
    return HttpResponse('首页')


def home(request):
    return HttpResponse('Homo')


def addstu(request):
    stu = Student()
    stu.s_name = str(random.randrange(1, 10000)) + '-zyz'
    stu.s_score = random.randrange(1, 100)
    stu.s_weight = 75.115454545454
    stu.s_height = 180.1154878785
    stu.s_detail = 'hello world!'
    # 数据存储
    stu.save()
    return HttpResponse('添加成功:' + stu.s_name)


def changestu(request):
    stu = Student.objects.get(pk=3)
    stu.s_name = str(random.randrange(1, 1000)) + '-atom'
    stu.save()
    return HttpResponse('更新学生信息')


def showstudents(request):
    # studengts = Student.objects.all()
    # studengts = Student.objects.filter(s_id=3)
    # studengts = Student.objects.filter(s_id__lt=3)
    studengts = Student.objects.order_by('-s_score')
    studengt_str = ''
    for stu in studengts:
        studengt_str += '<p>{}-姓名:{},成绩:{},体重:{},身高:{}</p>'.format(stu.s_id,stu.s_name, stu.s_score, stu.s_weight, stu.s_height)
    return HttpResponse(studengt_str)


def showstu(request):
    stu = Student.objects.get(s_id=3)
    stu_str = '<p>{}-姓名:{},成绩:{},体重:{},身高:{}</p>'.format(stu.s_id,stu.s_name, stu.s_score, stu.s_weight, stu.s_height)
    return HttpResponse(stu_str)