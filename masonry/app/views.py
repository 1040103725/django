import hashlib
import random
import time

import param as param
from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import Lunbo, User, Shoplist, Order, Cart


def index(request):
    # 轮播图
    lunobo = Lunbo.objects.all()
    # 获取token
    token = request.session.get('token')
    # 判断token在不在user里
    users = User.objects.filter(token=token)
    # 如果在传名字
    if users.count():
        unames = users.first()
        uname = unames.uname
    else:
        # 如果不在为空
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
        # 状态保持
        request.session['token'] = user.token
        return response


# 退出
def outlogin(request):
    response = redirect('app:index')
    # 设置token为空
    request.session.flush()
    return response


# 登录
def onload(request):
    if request.method == 'GET':
        return render(request, 'onload/onload.html')
    elif request.method == 'POST':
        uphone = request.POST.get('uphone')
        password = request.POST.get('password')
        try:
            # 判断数据库里是否有这个数据
            users = User.objects.get(uphone=uphone)
            if users.password == generate_password(password):
                # 状态保持
                users.token = generate_token()
                # 存到数据库
                users.save()
                request.session['token'] = users.token
                return redirect('app:index')
            else:
                return render(request, 'onload/onload.html', {'err': '账号或密码错误'})
        except:
            return render(request, 'onload/onload.html', {'p_err': '未注册'})


# 商品列表
def shoplist(request):
    shoplist = Shoplist.objects.all()
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        unames = users.first()
        uname = unames.uname
    else:
        uname = None
    date = {
        'shoplist': shoplist,
        'uname': uname,
    }
    return render(request, 'shoplist/shoplist.html', context=date)


# 商品详情
def shopinfo(request, s_id):
    shopid = Shoplist.objects.get(id=s_id)
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        unames = users.first()
        uname = unames.uname
    else:
        uname = None
    orders = Order.objects.filter(user=users)
    waitpay = orders.filter(status=0).count()
    paydone = orders.filter(status=1).count()
    data = {
        'uname': uname,
        'shopid': shopid,
        'waitpay': waitpay,
        'paydone': paydone,
    }
    return render(request, 'shopinfo/shopinfo.html', context=data)


# 添加购物车
def addcat(request):
    print('发送请求!')
    token = request.session.get('token')
    sid = request.GET.get('sid')
    print(sid)
    data = {

    }
    if token:
        user = User.objects.get(token=token)
        shoplist = Shoplist.objects.get(pk=sid)
        carts = Cart.objects.filter(user=user).filter(shoplist=shoplist)
        if carts.exists():
            cart = carts.first()
            cart.number = cart.number + 1
            cart.save()

            data['msg'] = '{}>>>添加成功!'.format(shoplist.name)
            data['number'] = cart.number
            data['status'] = 1
            return JsonResponse(data)
        else:
            cart = Cart()
            cart.user = user
            cart.shoplist = shoplist
            cart.number = 1
            cart.save()

            data['msg'] = '{}-添加成功!'.format(shoplist.name)
            data['number'] = cart.number
            data['status'] = 1
            return JsonResponse(data)
    else:
        data['msg'] = '请先登录!'
        data['status'] = -1
        return JsonResponse(data)


# 购物车
def mycar(request):
    # 获取token
    token = request.session.get('token')
    # 如果登录的话
    if token:
        user = User.objects.get(token=token)
        uname = user.uname
        carts = Cart.objects.filter(user=user).exclude(number=0)
        data = {
            'carts': carts,
            'uname': uname,
        }
        return render(request, 'Mycar/MyCar.html', data)
    # 没登录返回登录页面
    return redirect('app:onload')


def removecar(request):
    return None


