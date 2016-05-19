from django.shortcuts import render

def home(request):
	return render(request, 'home.html')

def attractions(request):
	return render(request, 'attractions.html')

def visit(request):
	return render(request, 'visit.html')

def team(request):
	return render(request, 'home.html')

def faq(request):
	return render(request, 'home.html')

def resources(request):
	return render(request, 'home.html')
