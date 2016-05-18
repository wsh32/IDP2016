from django.shortcuts import render

def home(request):
	return render(request, 'home.html')

def visit(request):
	return render(request, 'visit.html')
