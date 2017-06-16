from rest_framework import serializers
from Bugz.models import Observation

"""
    This class converts the model database table (for non-admins) into 
    Python data types.
"""
class ObservationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Observation
        exclude = ()