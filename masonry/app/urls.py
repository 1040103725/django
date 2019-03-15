from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),  # 首页
    url(r'^login/$', views.login, name='login'),  # 注册页面
    url(r'^onload/$', views.onload, name='onload'),  # 登录
    url(r'outlogin/$', views.outlogin, name='outlogin'),  # 退出
    url(r'^mycar/$', views.mycar, name='mycar'),  # 购物车
    url(r'^addcat/$', views.addcat, name='addcat'),  # 添加到购物车
    url(r'^removecar', views.removecar, name='removecar'),  # 删除购物车
    url(r'^shopinfo/(\d+)/$', views.shopinfo, name='shopinfo'),  # 商品详情
    url(r'^shoplist/$', views.shoplist, name='shoplist'),  # 商品展示
]
