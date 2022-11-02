from django.db import models
from django.forms import CharField, DateField
from authentication.models import User

# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=225)
    text = models.CharField(max_length=225)
    likes = models.IntegerField()
    dislikes = models.IntegerField()