from django.conf.urls import url

from app import views

urlpatterns = [
    # 首页
    url(r'^$', views.index, name='index'),
    # 注册
    url(r'^register/$', views.register, name='register'),
    # 退出登录
    url(r'^logout/$', views.logout, name='logout'),
    # 登录
    url(r'^login/$', views.login, name='login'),
    # 上传图片
    url(r'^upfile/$', views.upfile, name='upfile'),

]
