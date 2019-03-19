import hashlib
import random
import time

from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from app.models import lunbotu, User, Shoplist, Cart, Order, OrderShop


# 首页
def index(request):
    lunbotus = lunbotu.objects.all()
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        unames = users.first()
        uname = unames.uname
    else:
        uname = None

    data = {
        'lunbotus': lunbotus,
        'uname': uname,
    }

    return render(request, 'index/index.html', context=data)


# 加密token
def generate_token():
    token = str(time.time()) + str(random.random())
    md5 = hashlib.md5()
    md5.update(token.encode('utf-8'))
    token = md5.hexdigest()
    return token


# 加密密码
def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    param = md5.hexdigest()
    return param


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


# 登录
def onload(request):
    if request.method == 'GET':
        return render(request, 'onload/onload.html')
    elif request.method == 'POST':
        uphone = request.POST.get('uphone')
        password = request.POST.get('password')
        try:
            users = User.objects.get(uphone=uphone)
            if users.password == generate_password(password):
                users.token = generate_token()
                users.save()
                request.session['token'] = users.token
                return redirect('app:index')
            else:
                return render(request, 'onload/onload.html', {'err': '账号或密码错误!'})
        except:
            return render(request, 'onload/onload.html', {'p_err': '未注册!'})


# 商品列表
def shoplist(request):
    shoplists = Shoplist.objects.all()
    token = request.session.get('token')
    users = User.objects.filter(token=token)
    if users.count():
        unames = users.first()
        uname = unames.uname
    else:
        uname = None

    return render(request, 'shoplist/shoplist.html', {'shoplists': shoplists, 'uname': uname})


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


# 我的购物车
def MyCar(request):
    token = request.session.get('token')
    if token:
        user = User.objects.get(token=token)
        uname = user.uname
        # carts = Cart.objects.all()
        carts = Cart.objects.filter(user=user).exclude(number=0)
        data = {
            'carts': carts,
            'uname': uname,
        }
        return render(request, 'Mycar/MyCar.html', data)
    else:
        return redirect('app:onload')


# 增加商品
def addCar(request):
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


# 减少商品
def subCar(request):
    token = request.session.get('token')
    sid = request.GET.get('sid')
    data = {

    }

    user = User.objects.get(token=token)
    shoplist = Shoplist.objects.get(pk=sid)
    carts = Cart.objects.filter(user=user).filter(shoplist=shoplist)
    if carts.exists():
        cart = carts.first()
        cart.number = cart.number - 1
        cart.save()

        data['msg'] = '{}>>>取消添加!'.format(shoplist.name)
        data['number'] = cart.number
        data['status'] = 1
        return JsonResponse(data)


# 修改状态
def statusCar(request):
    print('请求!')
    cartid = request.GET.get('cartid')
    print(cartid)
    cart = Cart.objects.get(pk=cartid)
    cart.isselect = not cart.isselect
    cart.save()

    data = {

    }
    data['msg'] = '状态修改成功!'
    data['status'] = 1,
    data['isselect'] = cart.isselect
    return JsonResponse(data)


# 全选状态
def isallCar(request):
    token = request.session.get('token')
    user = User.objects.get(token=token)
    carts = Cart.objects.filter(user=user)
    isall = request.GET.get('isall')
    print(isall)
    if isall == 'true':
        isall = True
    else:
        isall = False
    for cart in carts:
        cart.isselect = isall
        cart.save()
    data = {

    }
    data['msg'] = '全选/取消全选'
    data['status'] = 1

    return JsonResponse(data)


# 购物车中添加商品
def addshop(request):
    token = request.session.get('token')
    shopID = request.GET.get('shopID')
    data = {

    }
    user = User.objects.get(token=token)
    shoplist = Shoplist.objects.get(pk=shopID)
    carts = Cart.objects.filter(user=user).filter(shoplist=shoplist)
    if carts.exists():
        cart = carts.first()
        cart.number = cart.number + 1
        cart.save()

        data['msg'] = '{}>>>添加成功!'.format(shoplist.name)
        data['number'] = cart.number
        data['status'] = 1
        return JsonResponse(data)


# 购物车中减少商品
def subshop(request):
    token = request.session.get('token')
    shopID = request.GET.get('shopID')
    data = {

    }
    user = User.objects.get(token=token)
    shoplist = Shoplist.objects.get(pk=shopID)
    carts = Cart.objects.filter(user=user).filter(shoplist=shoplist)
    if carts.exists():
        cart = carts.first()
        cart.number = cart.number - 1
        cart.save()

        data['msg'] = '{}>>>添加成功!'.format(shoplist.name)
        data['number'] = cart.number
        data['status'] = 1
        return JsonResponse(data)


# 验证
def checkphone(request):
    uphone = request.GET.get('uphone')
    users = User.objects.filter(uphone=uphone)
    if users.exists():
        return JsonResponse({'msg': '已注册！', 'status': 0})
    return JsonResponse({'msg': '未注册！', 'status': 1})


def removeshop(request):
    cart = request.GET.get('cart')
    cart = Cart.objects.get(pk=cart)
    if cart.number == 1:
        cart.delete()
        return redirect('app:cart')
    else:
        cart.number -= 1
        cart.save()
        return JsonResponse({'msg': 'ok'})


def generate_idenrifier():
    temp = str(random.randrange(1000, 10000)) + str(int(time.time())) + str(random.randrange(1000, 10000))
    return temp


def generateorder(request):
    token = request.session.get('token')
    user = User.objects.get(token=token)
    order = Order()
    order.user = user
    order.idenrifier = generate_idenrifier()
    order.save()

    carts = Cart.objects.filter(user=user).filter(isselect=True)
    for cart in carts:
        orderShop = OrderShop()
        orderShop.order = order
        orderShop.shoplist = cart.shoplist
        orderShop.number = cart.number
        orderShop.save()
        cart.delete()
    data = {

    }
    data['msg'] = '生成订单成功!'
    data['status'] = 1
    data['idenrifier'] = order.idenrifier
    return JsonResponse(data)


def orderdetail(request, idenrifier):
    # idenrifier = request.GET.get('idenrifier')
    order = Order.objects.get(idenrifier=idenrifier)
    data = {
        'order': order,
    }
    return render(request, 'order/orderdetail.html', data)


def orderlist(request, stu):
    token = request.session.get('token')
    user = User.objects.filter(token=token)
    orders = Order.objects.filter(user=user).filter(status=stu)
    data = {
        'orders': orders,
    }
    return render(request, 'order/orderlist.html', data)
