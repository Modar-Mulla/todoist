from rest_framework import serializers
from core.models import User
import emoji

from playground.models import *


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = TasksModel
        fields = ['id', 'app_user_id', 'title', 'description', 'task_happen_date',
                  'priority', 'task_reminder', ]
        app_user_id = serializers.IntegerField(read_only=True)

    def create(self, validated_data):
        task = TasksModel.objects.create(
            ** validated_data, app_user_id=self.context['request'])
        return task


class ReactionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReactionsModel
        fields = ['id', 'emoji', 'comment']

    def create(self, validated_data):
        reaction = ReactionsModel.objects.create(
            emoji=emoji.emojize(validated_data['emoji']), comment=validated_data['comment']
        )
        return reaction


class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = CommentsModel
        fields = ['id', 'text', 'posted_date', 'app_user_id', 'reactions']
    reactions = ReactionsSerializer(many=True, read_only=True)
    app_user_id = serializers.IntegerField(read_only=True)

    def create(self, validated_data):
        comment = CommentsModel.objects.create(
            ** validated_data, app_user_id=self.context['request'])
        return comment


class AppUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppUser
        fields = ['id', 'username', 'email', ]
    email = serializers.SerializerMethodField(method_name="get_email")

    def get_email(self, app_user):
        return app_user.user.email

    def create(self, validated_data):
        app_user = AppUser.objects.create(
            ** validated_data, user_id=self.context['request'])
        return app_user


class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']
