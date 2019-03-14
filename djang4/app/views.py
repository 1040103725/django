import os
import random

from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
from djang4.settings import BASE_DIR


def index(request):
    return render(request, 'index.html')


def basedemo(request):
    context = {
        'name': 'Hello Worldo',
        'age': 18,
        'score': [79, 69, 38],
        'usernaem': 'root',
        'scoredir': [
            {'语文': 98},
            {'数学': 90},
            {'英语': 83},
        ],
        'names': ['张三', '李四', '王五', '赵六'],
    }
    return render(request, 'basedemo.html', context=context)


def includedemo(request):
    goods_list = ['ipaad', 'iphone', 'mac']
    return render(request, 'includedemo.html', context={
        'goods_list': goods_list
    })


def loginview(request):
    random_str = str(random.randrange(1000, 10000))

    return render(request, 'login.html', context={'random_str': random_str})


def login(request):
    return HttpResponse('正在登录．．．．')


from PIL import Image, ImageDraw, ImageFont
import io


def verifycode(request):
    # 定义图片大小
    width = 120
    height = 40
    # 定义图片颜色
    bgcolor = (random.randrange(0, 256), random.randrange(0, 256), random.randrange(0, 256))

    # 创建图片
    image = Image.new('RGB', (width, height), bgcolor)

    # 创建画笔
    draw = ImageDraw.Draw(image)

    # 随机数生成
    temp = '1234567890qwertyuiopasdfghjklzxcvbnm'
    random_str = ''
    for i in range(0, 4):
        random_str += temp[random.randrange(0, len(temp))]

    # 字体类型
    fontPath = os.path.join(BASE_DIR,'app/fonts/Fangsong.ttf')
    font = ImageFont.truetype(fontPath,30)
    # 字体颜色
    font_color_1 = (random.randrange(0, 256), random.randrange(0, 256), random.randrange(0, 256))
    font_color_2 = (random.randrange(0, 256), random.randrange(0, 256), random.randrange(0, 256))
    font_color_3 = (random.randrange(0, 256), random.randrange(0, 256), random.randrange(0, 256))
    font_color_4 = (random.randrange(0, 256), random.randrange(0, 256), random.randrange(0, 256))

    # 字体绘制
    draw.text((10,5),random_str[0],fill=font_color_1,font=font)
    draw.text((40, 5), random_str[1], fill=font_color_2, font=font)
    draw.text((70, 5), random_str[2], fill=font_color_3, font=font)
    draw.text((100, 5), random_str[3], fill=font_color_4, font=font)
    # 添加噪点
    # for i in range(0, 500):
    #     xy = (random.randrange(0, width), random.randrange(0, height))
    #     fill = (random.randrange(0, 256), random.randrange(0, 256), random.randrange(0, 256))
    #     draw.point(xy=xy, fill=fill)
    # 画线
    draw.line(
        [
            (random.randrange(0, 256), random.randrange(0, 256)), # 起点
            (random.randrange(0, 256), random.randrange(0, 256)), # 终点
        ],fill= (random.randrange(0, 256), random.randrange(0, 256), random.randrange(0, 256))
    )
    
    # 释放画笔
    del draw

    # 文件操作
    buff = io.BytesIO()
    print(buff)
    image.save(buff, 'png')
    return HttpResponse(buff.getvalue())
