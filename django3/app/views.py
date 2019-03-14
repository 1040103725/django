import random

from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from app.models import Animal, Person, IDcard


def index(request):
    return render(request,'index.html')


def animal(request):
    return render(request,'animal.html')


def addanimal(request):
    animal = Animal()
    animal.name = '阿猫阿狗' + str(random.randrange(1,10000))
    animal.age = str(random.randrange(1,10))
    animal.save()
    return HttpResponse('添加数据成功')


def selectanimal(request):
    # 获得所有数据没有被逻辑删除的
    # animals = Animal.objects.all()

    # 逻辑删除去除掉
    # animals = Animal.objects.exclude(is_del=True)

    animals = Animal.myobjects.all()
    animals_str = ''
    for item in animals:
        animals_str += '<p>{}-{}-{}</p>'.format(item.id,item.name,item.age)
    return HttpResponse(animals_str)


def deleteanimal(request):
    animal = Animal.myobjects.last()
    animal.delete()
    return HttpResponse('删除数据成功')


def updateanimal(request):
    animal = Animal.myobjects.last()
    animal.name = '大花猫'
    animal.save()
    return HttpResponse('修改数据成功')


def onetoone(request):
    return render(request,'onetoone.html')


def addperson(request):
    person = Person()
    person.p_name = 'atom-' + str(random.randrange(1,100))
    person.save()
    return render(request,'addperson.html')




def bindcard(request):
    card = IDcard()
    card.i_no = '441622{}{}{}{}'.format(random.randrange(1900,2020),random.randrange(1,13),random.randrange(1,30),random.randrange(1000,10000))
    card.i_sex = random.randrange(1,3)
    card.i_add = '大学城{}栋'.format(random.randrange(1,200))

    # 谁的身份证
    person = Person.objects.last()
    card.i_person = person
    card.save()
    return HttpResponse('身份证绑定成功')


def deleteperson(request):
    person = Person.objects.last()
    person.delete()
    return HttpResponse('删除人成功')


def deletecard(request):
    card = IDcard.objects.last()
    card.delete()
    return HttpResponse('删除卡成功')


def getcard(request):
    person = Person.objects.last()

    # 主表获取从表信息(模型类没有对应属性)
    card = person.idcard
    if card.i_sex == 1:
        temp = '男'
    else:
        temp = '女'

    response_str = '姓名：{},性别：{},身份证号：{},家庭住址：{}'.format(person.p_name,temp,card.i_no,card.i_add)

    return HttpResponse(response_str)


def getperson(request):
    card = IDcard.objects.last()

    # 从表获取主表信息(显示访问）
    person = card.i_person
    if card.i_sex == 1:
        temp = '男'
    else:
        temp = '女'
    response_str = '姓名：{},性别：{},身份证号：{},家庭住址：{}'.format(person.p_name, temp, card.i_no, card.i_add)

    return HttpResponse(response_str)