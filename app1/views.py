from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import CustomUser
from django.contrib.auth import logout
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
# Create your views here.

def home(request):
    return render(request, 'home.html')

def game2048(request):
    return render(request, '2048.html')