from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),  # 首页
    url(r'^login/$', views.login, name='login'),  # 注册页面
    url(r'outlogin/$', views.outlogin, name='outlogin'),  # 退出
    url(r'^mycar/$', views.mycar, name='mycar'),  #
    url(r'^onload/$', views.onload, name='onload'),
    url(r'^shopinfo/$', views.shopinfo, name='shopinfo'),
    url(r'^shoplist/$', views.shoplist, name='shoplist'),
]
