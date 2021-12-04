from posts.views import CreatePosts,ListPosts,SinglePosts
from django.urls import path

urlpatterns = [
  path('create/',CreatePosts.as_view(),name='create'),
  path('',ListPosts.as_view(),name='list'),
  path('<int:pk>/',SinglePosts.as_view(),name='single'),
]