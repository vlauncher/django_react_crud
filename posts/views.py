from posts.models import Post
from posts.serializers import CreatePostsSerializers,ListPostsSerializers
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView,UpdateAPIView,DestroyAPIView

class CreatePostsApiView(CreateAPIView):
    model = Post
    serializer_class = CreatePostsSerializers

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

class ListPostsApiView(ListAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = ListPostsSerializers

    # def get_queryset(self):
    #     return Post.objects.filter(user = self.request.user)

class SinglePostApiView(RetrieveAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = ListPostsSerializers


class UpdatePostsApiView(UpdateAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = CreatePostsSerializers

    # def perform_update(self, serializer):
    #     serializer.save(user = self.request.user)

class DeletePostsApiView(DestroyAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = CreatePostsSerializers