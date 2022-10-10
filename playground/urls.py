from django.urls import path
from . import views
from rest_framework.routers import SimpleRouter
from .views import *
router = SimpleRouter()
router.register('tasks', TasksViewSet)
router.register('users', UsersViewSet)
router.register('comments',CommentsViewSet)
router.register('reactions',ReactionsViewSet)
urlpatterns = router.urls + \
    [path('', views.startPage), path('inbox', views.inbox), path('login', LoginView.as_view()), path(
        'signup', views.signup), path('validate-email', views.email_validation), path('validate-creds', views.check_login_creds)]
