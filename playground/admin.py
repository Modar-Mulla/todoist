from django.contrib import admin

from playground.models import AppUser, TasksModel
from django.db.models import Count

@admin.register(TasksModel)
class TasksAdmin(admin.ModelAdmin):
    list_display=['title','description','task_happen_date','priority','created_at','app_user']
    list_select_related=['app_user',]

@admin.register(AppUser)
class AppUserAdmin(admin.ModelAdmin):
    list_display=['id','user','created_at','user_id','tasks_count'] 
    list_select_related=['user']  
    @admin.display(ordering='tasks_count')
    def tasks_count(self,app_user):
        return app_user.tasks_count
    def get_queryset(self, request):
        return super().get_queryset(request).annotate(
            tasks_count=Count('tasks')
        )