from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$',views.index,name='index'), # 首页
    url(r'^login/$',views.login,name='login'), # 注册
    url(r'^outlogin/$',views.outlogin,name='outlogin'), # 退出登录
    url(r'^onload/$',views.onload,name='onload'), # 登录
    url(r'^shoplist/$',views.shoplist,name='shoplist'), # 商品展示
    url(r'^shopinfo/(\d+)/$',views.shopinfo,name='shopinfo'), # 商品详情页
    url(r'^MyCar/$',views.MyCar,name='MyCar'), # 购物车
    url(r'^addCar/$',views.addCar,name='addCar'), # 添加购物车
    url(r'^subCar/$',views.subCar,name='subCar'), # 删除购物车
    url(r'^statusCar/$',views.statusCar,name='statusCar'), #
    url(r'^isallCar/$',views.isallCar,name='isallCar'),
    url(r'^addshop/$',views.addshop,name='addshop'),
    url(r'^subshop/$',views.subshop,name='subshop'),
    url(r'^checkphone/$',views.checkphone,name='checkphone'),
    url(r'^removeshop/$',views.removeshop,name='removeshop'),
    url(r'^generateorder/$',views.generateorder,name='generateorder'),
    url(r'^orderdetail/(\d+)/$',views.orderdetail,name='orderdetail'),
    url(r'^orderlist/(\d+)/$',views.orderlist,name='orderlist'),
]