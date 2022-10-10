from asyncio import mixins
from multiprocessing import AuthenticationError
from pydoc import render_doc
from urllib.parse import unquote
import json
import jwt
import requests
from urllib import request, response
from urllib.robotparser import RequestRate
from django.contrib.auth.hashers import check_password
from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from djoser.serializers import TokenSerializer


class TasksViewSet(ModelViewSet):

    queryset = TasksModel.objects.select_related('app_user').all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_context(self):
        return {'request': self.request}

    def list(self, request):
        instance = TasksModel.objects.select_related('app_user').all().filter(app_user_id=request.user.id)
        serializer = TaskSerializer(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        serializer = TaskSerializer(
            context={'request': request.user.id}, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request, pk, *args, **kwargs):
        instance = TasksModel.objects.select_related('app_user').get(id=pk)
        if instance.app_user_id == request.user.id:

            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({'detail': 'not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


class CommentsViewSet(ModelViewSet):
    queryset = CommentsModel.objects.prefetch_related("reactions").select_related('app_user').all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_context(self):
        return {'request': self.request}

    def list(self, request):
        instance = CommentsModel.objects.prefetch_related('reactions').select_related('app_user').all().filter(app_user_id=request.user.id)
        serializer = CommentsSerializer(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        serializer = CommentsSerializer(
            context={'request': request.user.id}, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request, pk, *args, **kwargs):
        instance = CommentsModel.objects.get(id=pk)
        if instance.app_user_id == request.user.id:

            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({'detail': 'not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


class UsersViewSet(ModelViewSet):
    queryset = AppUser.objects.select_related('user').all()
    serializer_class = AppUserSerializer
    # permission_classes = [IsAdminUser]

    def create(self, request):
        serializer = AppUserSerializer(
            context={'request': request.data['user']}, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get_serializer_context(self):
        return {'request': self.request}

    @action(detail=False, methods=['GET', 'PUT'], permission_classes=[IsAuthenticated])
    def me(self, request):
        (user, created) = AppUser.objects.select_related('user').get_or_create(user_id=request.user.id)
        if request.method == 'GET':
            serializer = AppUserSerializer(user)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = AppUserSerializer(user, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


class ReactionsViewSet(ModelViewSet):
    queryset = ReactionsModel.objects.select_related('comment').all()
    serializer_class = ReactionsSerializer


@api_view(["GET"])
def startPage(request):
    return render(request, "start.html")


class LoginView(APIView):
    # def post(self, request):
    #     email = request.data['email']
    #     password = request.data['password']
    #     if(User.objects.filter(email=email)).exists():
    #         user = User.objects.get(email=email)

    #         if not user.check_password(password):
    #             raise AuthenticationFailed("Wrong password")

    #         user_data = {"username": f"{user.username}",
    #                      "password": f"{password}"}

    #         response = requests.post(
    #             'http://127.0.0.1:8000/auth/jwt/create', data=user_data)
    #         token = json.loads(response.content)
    #         print(token['access'])
    #         set_cookie_reponse = HttpResponse()
    #         set_cookie_reponse.set_cookie(key='jwt',
    #                                       value=token['access'], expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'], httponly=True, samesite='Lax', secure=True)
    #         return Response(token)
    #     else:
    #         raise AuthenticationFailed("User not found")

    def get(self, request):
        return render(request, 'login.html')


@api_view()
def signup(request):
    return render(request, 'signup.html')


@api_view(['POST'])
def email_validation(request):
    data = json.loads(request.body)
    email = data['email']
    if(User.objects.filter(email=email)).exists():
        return Response("email already exists")
    else:
        return Response("ok")


@api_view(["GET", "POST"])
def inbox(request):
    if request.method == "GET":
        return render(request, "main.html")


@api_view(["POST"])
def check_login_creds(request):
    serializer = LoginUserSerializer(data=request.data)
    serializer.is_valid()
    if User.objects.filter(email=serializer.data['email']).exists():
        user = User.objects.get(email=serializer.data['email'])
        if check_password(serializer.data['password'], user.password):
            check_password(serializer.data['password'], user.password)
            return Response(data={'username': user.username}, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
