from django.contrib.auth.models import User
from rest_framework import serializers

class ObservationSerializer(serializers.Serializer):
    # user = serializers.ForeignKey(User)
    insect_name = serializers.CharField(max_length=25)
    population = serializers.CharField(max_length=50)
    latitude = serializers.DecimalField(max_digits=15, decimal_places=10)
    longitude = serializers.DecimalField(max_digits=15, decimal_places=10)
    time = serializers.DecimalField(max_digits=15, decimal_places=10)
    date = serializers.CharField(max_length=20)



    def create(self, validated_data):
        """
        Create and return a new `Observation` instance, given the validated data.
        """
        return Observation.objects.create(**validated_data)

    def update(self, observation, validated_data):
        """
        Update and return an existing `Observation` instance, given the validated data.
        """
        observation.insect_name = validated_data.get('insect_name', observation.insect_name)
        observation.population = validated_data.get('population', observation.population)
        observation.latitude = validated_data.get('latitude', observation.latitude)
        observation.longitude = validated_data.get('longitude', observation.longitude)
        observation.time = validated_data.get('time', observation.time)
        observation.date = validated_data.get('date', observation.date)
        observation.save()
        return observation