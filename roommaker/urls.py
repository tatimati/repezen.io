from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^maker/$', views.maker, name='maker'),
    url(r'room/', views.comment, name='comment'),
    url(r'test/$', views.test, name='test'),
    url(r'option/', views.option, name='option'),
]
