from django.urls import path
from . import views

urlpatterns = [
    path('', views.indexSisteamasBeta, name='url_sistemasBeta'),
]