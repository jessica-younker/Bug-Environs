from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect, Http404
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from Bugz.serializers import ObservationSerializer


from elasticsearch import Elasticsearch
es = Elasticsearch('bugz_elasticsearch')
import datetime
import json

# @csrf_exempt

@api_view(['GET', 'POST'])
def observation_form_data(request):
    """
    List all observations, or create a new observation.
    """
    if request.method == 'GET':
        res = es.search(index="bugz", body={"query": {"match_all": {}}}, size=10000, from_=0)  
        print("Got %d Hits:" % res['hits']['total'])
        
        #reformat location and date back to original forms (& add rest of data too)
        observation_list = []
        for hit in res['hits']['hits']:
            reformatted_es_data = {}
            reformatted_es_data["insect_name"] = hit["_source"]["insect_name"]
            reformatted_es_data["population"] = hit["_source"]["population"]
            reformatted_es_data["latitude"] = hit["_source"]["location"]["lat"]
            reformatted_es_data["longitude"] = hit["_source"]["location"]["lon"]
            datetimer = datetime.datetime.strptime(hit["_source"]["date"], "%Y-%m-%dT%H:%M:%S")
            reformatted_es_data["date"] = datetimer.date()
            reformatted_es_data["time"] = datetimer.time()
            observation_list.append(reformatted_es_data)        

        serializer = ObservationSerializer(data=observation_list, many=True)
        if serializer.is_valid():
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    elif request.method == 'POST':
        serializer = ObservationSerializer(data=request.data)
        if serializer.is_valid():
            fixed_data_dict = {}
            fixed_data_dict["insect_name"] = serializer.validated_data["insect_name"]
            fixed_data_dict["population"] = serializer.validated_data["population"]
            fixed_data_dict["location"] = serializer.make_location()
            fixed_data_dict["date"] = serializer.make_date()
            res = es.index(index="bugz", doc_type='observation', body=fixed_data_dict)
            print(res['created'])

            return Response(fixed_data_dict, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
