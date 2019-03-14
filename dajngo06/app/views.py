import hashlib
import os
import random
import time
import uuid

from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import User

# 首页
from dajngo06 import settings


def index(request):
    # 状态保持 cookie
    # username = request.COOKIES.get('username')

    # 状态保持　session
    # username = request.session.get('username')

    # token 状态保持
    token = request.session.get('token')
    user = None
    if token:
        user = User.objects.get(token=token)
    return render(request, 'index.html', context={'user': user})


# 注册
# token 生成 唯一标识
def generate_token():
    # 时间戳 + 随机数　＋　ip
    token = str(time.time) + str(random.random())
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))
    return md5.hexdigest()


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        user = User()
        user.username = request.POST.get('username')
        user.password = generate_password(request.POST.get('password'))
        user.tel = request.POST.get('tel')

        # user.token = generate_token()
        user.token = generate_token()
        # uuid.uuid1()

        user.save()

        response = redirect('app:index')
        # 状态保持 cookie
        # response.set_cookie('username',user.username)

        # 状态保持 session
        # request.session['username'] = user.username

        # 设置过期时间
        # request.session.set_expiry(10)

        # token 状态保持
        request.session['token'] = user.token
        return response


# 退出登录
def logout(request):
    response = redirect('app:index')
    # 方式一
    # del request.session['username']
    # 方式二
    # response.delete_cookie('username')
    # 方式三
    request.session.flush()
    return response


# 登录
def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = generate_password(request.POST.get('password'))

        users = User.objects.filter(username=username).filter(password=password)
        print(users)
        if users.exists():
            # 状态保持
            user = users.first()
            user.token = generate_token()  # 更新token
            user.save()

            request.session['token'] = user.token
            # request.session['username'] = user.username
            return redirect('app:index')
        else:
            return redirect('app:login')


def upfile(request):
    if request.method == 'GET':
        return render(request, 'upfile.html')
    elif request.method == "POST":
        # 文件路径
        headimg = request.FILES.get('headimg')

        filename = str(time.time()) + '-' + headimg.name
        # 文件读写
        filepath = os.path.join(settings.MEDIA_POOT, filename)

        with open(filepath, 'wb') as fp:
            for item in headimg.chunks():
                fp.write(item)

                token = request.session.get('token')
                user = User.objects.get(token=token)
                user.icon = filename
                user.save()

                return redirect('app:index')
