from django.shortcuts import render

# Create your views here.


def index(request):
    data = {}
    data['teste'] = "EM DESENVOLVIMENTO"

    return render(request, 'filaAtendimento/index.html', data)