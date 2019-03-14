from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^index/$',views.index,name='app'),
    url(r'^animal/$',views.animal,name='animal'),

    # 增加
    url(r'^addanimal/$',views.addanimal,name='addanimal'),
    # 查询
    url(r'^selectanimal/$',views.selectanimal,name='selectanimal'),
    # 删除数据
    url(r'^deleteanimal/$',views.deleteanimal,name='deleteanimal'),
    # 修改数据
    url(r'^updateanimal/$',views.updateanimal,name='updateanimal'),


    #
    url(r'^onetoone/$',views.onetoone,name='onetoone'), # 一对一页面
    url(r'^addperson/$',views.addperson,name='addperson') ,# 添加人
    url(r'^bindcard/$',views.bindcard,name='bindcard'), # 绑定身份证
    url(r'^deleteperson/$',views.deleteperson,name='deleteperson'), # 删除人
    url(r'^deletecard/$',views.deletecard,name='deletecard'), # 删除卡
    url(r'^getcard/$',views.getcard,name='getcard'),# 主表获取从表
    url(r'^getperson/$',views.getperson,name='getperson'), # 从表获取主表信息
]