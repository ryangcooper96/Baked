from django.shortcuts import render
from django.http import JsonResponse
# Create your views/functions here.

from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
# from rest_framework import generics

from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
# Retrieve User model
User = get_user_model()

# Class based views for our User Authentication


class RegisterView(APIView):

    def post(self, request):

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(email=request.data.get('email'))
            token = jwt.encode(
                {'sub': user.id},
                settings.SECRET_KEY,
                algorithm='HS256'
            )
            return Response({'token': token, 'username': user.username, 'message': 'Registration Successful!!!'})
        return Response(serializer.errors, status=422)


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Credentials!'})

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid Credentials!'})

        token = jwt.encode(
            {'sub': user.id},
            settings.SECRET_KEY,
            algorithm='HS256'
        )

        return Response({'token': token, 'username': user.username, 'message': f'Welcome back {user.username}!!!'})
