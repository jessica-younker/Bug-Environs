# """
# bugz api model configuration for insect
# """

# from django.db import models
# from django.contrib.auth.models import User
# # from . insect_model import Insect


# class Observation(models.Model):

#     # insect = models.ForeignKey(Insect)
#     # user = models.ForeignKey(User)
#     insect_name = models.CharField(max_length=25, null=True)
#     population = models.CharField(max_length=50, null=True)
#     latitude = models.DecimalField(max_digits=15, decimal_places=10, null=True)
#     longitude = models.DecimalField(max_digits=15, decimal_places=10, null=True)
#     time = models.TimeField(auto_now=False, auto_now_add=False, null=True)
#     date = models.CharField(max_length=20, null=True)
