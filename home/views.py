from django.shortcuts import render

# Create your views here.

def index(request):
    data = {}
    data['teste'] = "TOP"

    return render(request, 'home/index.html', data)