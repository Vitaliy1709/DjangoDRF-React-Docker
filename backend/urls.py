from django.urls import path
from . import views

urlpatterns = [
    path("api/groups/", views.GroupListCreate.as_view(), name="group_list"),
    path("api/groups/add/", views.GroupListCreate.as_view(), name="group_create"),
    path("api/groups/<int:pk>/edit/", views.GroupDetail.as_view(), name="group_update"),
    path("api/groups/<int:pk>/delete/", views.GroupDetail.as_view(), name="group_delete"),
    path("api/users/", views.UserListCreate.as_view(), name="user_list"),            
    path("api/users/add/", views.UserListCreate.as_view(), name="user_create"),
    path("api/users/<int:pk>/edit/", views.UserDetail.as_view(), name="user_update"),
    path("api/users/<int:pk>/delete/", views.UserDetail.as_view(), name="user_delete"),

]
