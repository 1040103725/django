import hashlib
import random
import time

import param as param
from django.shortcuts import render, redirect

# Create your views here.
from app.models import Lunbo, User


def index(request):
    # 轮播图
    lunobo = Lunbo.objects.all()

    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        unames = users.first()
        uname = unames.uname
    else:
        uname = None
    response_dir = {
        'lunbo': lunobo,
        'uname': uname
    }
    return render(request, 'index/index.html', context=response_dir)


# 密码加密
def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    param = md5.hexdigest()
    return param


# 加密tooken
def generate_token():
    token = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))
    token = md5.hexdigest()
    return token


# 注册
def login(request):
    if request.method == 'GET':
        return render(request, 'login/login.html')
    elif request.method == 'POST':
        user = User()
        user.uphone = request.POST.get('uphone')
        user.uname = request.POST.get('uname')
        user.password = generate_password(request.POST.get('password'))
        user.token = generate_token()
        user.save()
        response = redirect('app:index')
        request.session['token'] = user.token
        return response


# 退出
def outlogin(request):
    response = redirect('app:index')
    request.session.flush()
    return response


# # 登录
# def onload(request):
#     if request.method == 'GET':
#         return render(request, 'onload/onload.html')
#     elif request.method == 'POST':
#         uphone = request.POST.get('uphone')
#         password = request.POST.get('password')
#         try:
#             users = User.objects.get(uphone=uphone)
#             if users.password == generate_password(password):
#                 users.token = generate_token()
#                 users.save()
#                 request.session['token'] = users.token
#                 return redirect('app:index')
#             else:
#                 return render(request, 'onload/onload.html', {'err': '账号或密码错误!'})
#         except:
#             return render(request, 'onload/onload.html', {'p_err': '未注册!'})

# 登录
def onload(request):
    return render(request, 'onload/onload.html')


def shopinfo(request):
    return render(request, 'shopinfo/shopinfo.html')


def shoplist(request):
    return render(request, 'shoplist/shoplist.html')


def mycar(request):
    return render(request, 'Mycar/MyCar.html')
