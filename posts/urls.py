from posts.views import CreatePostsApiView,ListPostsApiView,SinglePostApiView,UpdatePostsApiView,DeletePostsApiView
from django.urls import path

urlpatterns = [
    path('',ListPostsApiView.as_view(),name='listposts'),
    path('create/',CreatePostsApiView.as_view(),name='create'),
    path('update/<uuid:pk>/',UpdatePostsApiView.as_view(),name='update'),
    path('<uuid:pk>/',SinglePostApiView.as_view(),name='post'),
    path('delete/<uuid:pk>/',DeletePostsApiView.as_view(),name='delete'),
]