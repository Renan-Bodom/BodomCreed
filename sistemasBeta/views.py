from django.shortcuts import render

# Create your views here.

def indexSisteamasBeta(request):
    data = {}
    data['teste'] = "TOP"

    return render(request, 'sistemasBeta/sistemasBeta.html', data)