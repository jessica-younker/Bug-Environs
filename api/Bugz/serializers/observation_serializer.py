from django.contrib.auth.models import User
from rest_framework import serializers
import datetime

class ObservationSerializer(serializers.Serializer):
    """
    Serialize form data from webapp and alter some data (location and date) 
    for Elasticsearch.
    """
    # user = serializers.ForeignKey(User)
    insect_name = serializers.CharField(max_length=255)
    population = serializers.IntegerField(min_value=1)
    latitude = serializers.DecimalField(max_digits=15, decimal_places=10, min_value=-90, max_value=90)
    longitude = serializers.DecimalField(max_digits=15, decimal_places=10, min_value=-180, max_value=180)
    date = serializers.DateField()
    time = serializers.TimeField()

    #formatting form data for elasticsearch
    def make_location(self):
        location = { 
            "lat": self.validated_data['latitude'],
            "lon": self.validated_data['longitude']
        }
        return location

    def make_date(self):
        dt = self.validated_data["date"]
        tm = self.validated_data["time"]
        date = datetime.datetime.combine(dt, tm)
        return date

