from django.db import models
from django.utils import timezone
from django.conf import settings


class AppUser(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='app_user')

    def __str__(self) -> str:
        return self.user.username

    def username(self):
        return self.user.username


class TasksModel(models.Model):
    pr1 = 'p1'
    pr2 = 'p2'
    pr3 = 'p3'
    pr4 = 'p4'
    priorities = [
        (pr1, "Priority 1"),
        (pr2, "Priority 2"),
        (pr3, "Priority 3"),
        (pr4, "Priority 4")
    ]

    title = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=True)
    priority = models.CharField(max_length=5, choices=priorities, default=pr4)
    task_happen_date = models.DateField(null=True, blank=True)
    task_reminder = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    app_user = models.ForeignKey(
        AppUser, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self) -> str:
        return str(self.id)

    class Meta:
        ordering = ['id']


class CommentsModel(models.Model):
    text = models.TextField()
    posted_date = models.DateField(auto_now_add=True)
    app_user = models.ForeignKey(
        AppUser, on_delete=models.CASCADE, related_name='comments')
    def __str__(self) -> str:
        return str(self.id)

class ReactionsModel(models.Model):
    emoji = models.CharField(max_length=50)
    comment = models.ForeignKey(
        CommentsModel, on_delete=models.CASCADE, related_name='reactions')
    def __str__(self) -> str:
        return self.emoji