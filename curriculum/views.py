from django.shortcuts import render

# Create your views here.

def cv_renan(request):

    return render(request, 'curriculum/cv_renan.html')

def cv_luana(request):

    return render(request, 'curriculum/cv_luana.html')

def cv_stefanie(request):

    return render(request, 'curriculum/cv_stefanie.html')