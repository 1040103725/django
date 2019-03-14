from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$',views.index,name='index'),

    url(r'^goods/$',views.goods,name='goods'),
    url(r'^postview/$',views.postview,name='postview'),
    url(r'^posttet/$',views.posttet,name='posttet'),
]
