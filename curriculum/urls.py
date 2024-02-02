from django.urls import path
from . import views

urlpatterns = [
    path('', views.cv_renan, name='url_cv_renan'),
    path('renan/', views.cv_renan, name='url_cv_renan'),
    path('luana/', views.cv_luana, name='url_cv_luana'),
    path('stefanie/', views.cv_stefanie, name='url_cv_stefanie'),
]