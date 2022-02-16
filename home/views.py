from django.shortcuts import render

# Create your views here.

def index(request):
    data = {}
    data['siteNome'] = "Bodom Creed"

    return render(request, 'home/index.html', data)