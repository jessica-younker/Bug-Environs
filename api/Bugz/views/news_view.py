# from django.contrib.auth import logout, login, authenticate
# from django.contrib.auth.models import User
# from django.contrib.auth.decorators import login_required
# from django.shortcuts import render
# from Bugz.views.login_view import LoginViewSet
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.authtoken.models import Token
# from django.http import HttpResponse, HttpResponseRedirect, Http404

# from rest_framework import viewsets
# from Bugz.serializers import * 
# # from Bugz.models import *
# import json

# # @csrf_exempt
# class NewsViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows News to be viewed or 
#     edited.
#     """
#     queryset = News.objects.all().order_by("-date")
#     serializer_class = NewsSerializer