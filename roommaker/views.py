from django.shortcuts import render

# Create your views here.
def maker(request):

    return render(request, 'roommaker/make.html', {})

def comment(request):

    return render(request, 'roommaker/basepresen.html', {})

def test(request):

    return render(request, 'roommaker/test.html', {})
