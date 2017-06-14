"""
bugz api model configuration for news
"""

from django.db import models
from django.contrib.auth.models import User


class News(models.Model):

    user = models.ForeignKey(User)
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=200)
    date = models.DateField(auto_now=True)
