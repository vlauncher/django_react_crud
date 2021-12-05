from django.db import models
from uuid import uuid4
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.
class Post(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid4 ,editable=False)
    title = models.CharField(max_length=60)
    content = models.CharField(max_length=200)