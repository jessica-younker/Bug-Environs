"""
bugz api model configuration for insect
"""

from django.db import models


class Insect(models.Model):

    name = models.CharField(max_length=25)