from django.http import request
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView
from posts.models import Post
from posts.serializers import CreatePostsSerializers,ListPostsSerializers

class CreatePosts(CreateAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = CreatePostsSerializers

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ListPosts(ListAPIView):
    model = Post
    serializer_class = ListPostsSerializers

    def get_queryset(self):
        return Post.objects.filter(user = self.request.user)

class SinglePosts(RetrieveAPIView):
    model = Post
    serializer_class = ListPostsSerializers
    queryset = Post.objects.all()