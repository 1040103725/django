from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')


def goods(request,haha=1):
    temp = '第{}页商品'.format(haha)

    return HttpResponse(temp)


def postview(request):
    return render(request,'postview.html')


def posttet(request):
    username = request.POST.get('username')
    temp = '用户名：{}'.format(username)
    return HttpResponse(temp)