from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$',views.index),
    url(r'^home/$',views.home),

    url(r'^addstu/$',views.addstu),
    url(r'^changestu/$',views.changestu),
    url(r'^showstudents/$',views.showstudents),
    url(r'^showstu/$',views.showstu)
]