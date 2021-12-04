from posts.models import Post
from posts.serializers import CreatePostsSerializers,ListPostsSerializers
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView

class CreateListPostsApiView(ListCreateAPIView):
    model = Post
    queryset = Post.objects.all()
    serializer_class = CreatePostsSerializers

    def get_queryset(self):
        return Post.objects.filter(user = self.request.user)
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SingleUpdateDestroyPostsApiView(RetrieveUpdateDestroyAPIView):
    serializer_class = ListPostsSerializers
    queryset = Post.objects.all()