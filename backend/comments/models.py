from django.db import models
from django.forms import CharField, DateField

# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey
    video_id = models.CharField(max_length=225)
    text = models.CharField(max_length=225)
    likes = models.IntegerField()
    genre = models.IntegerField()