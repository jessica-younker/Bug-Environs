"""
bugz api model configuration for insect
"""

from django.db import models
from django.contrib.auth.models import User
from . insect_model import Insect


class Observation(models.Model):

    insect = models.ForeignKey(Insect)
    user = models.ForeignKey(User)
    name = models.CharField(max_length=25)
    latitude = models.DecimalField(max_digits=15, decimal_places=10)
    longitude = models.DecimalField(max_digits=15, decimal_places=10)
    time = models.TimeField(auto_now=False, auto_now_add=False)
    population = models.CharField(max_length=50)
    date = models.DateField(auto_now=False, auto_now_add=False)
