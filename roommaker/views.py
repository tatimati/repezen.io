from django.shortcuts import render

# Create your views here.
def maker(request):

    return render(request, 'roommaker/make.html', {})

def comment(request):

    return render(request, 'roommaker/tmp.html', {})

def test(request):

    return render(request, 'roommaker/test.html', {})

def option(request):

    return render(request, 'roommaker/option.html', {})
