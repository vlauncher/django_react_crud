from rest_framework import serializers
from posts.models import Post

class CreatePostsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class ListPostsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'