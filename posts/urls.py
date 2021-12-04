from posts.views import CreateListPostsApiView,SingleUpdateDestroyPostsApiView
from django.urls import path

urlpatterns = [
  path('',CreateListPostsApiView.as_view(),name='list'),
  path('<int:pk>/',SingleUpdateDestroyPostsApiView.as_view(),name='single'),
 
]