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

import json

# @csrf_exempt

@api_view(['GET', 'POST'])
def observation_form_data(request):
    """
    List all observations, or create a new observation.
    """
    if request.method == 'GET':
        observation_list = []
        serializer = ObservationSerializer(data=observation_list, many=True)
        res = es.search(index="bugz", body={"query": {"match_all": {}}})  
        print("Got %d Hits:" % res['hits']['total'])
        for hit in res['hits']['hits']:
            print("%(insect_name)s" % hit["_source"])
            observation_list.append(hit["_source"])
        if serializer.is_valid():
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    elif request.method == 'POST':
        serializer = ObservationSerializer(data=request.data)
        if serializer.is_valid():
            print("serializer.data", serializer.data)
            res = es.index(index="bugz", doc_type='observation', body=serializer.data)
            print(res['created'])

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# get a document by id
# res = es.get(index="test-index", doc_type='tweet', id=1)
# print(res['_source'])

# wut dat
# es.indices.refresh(index="test-index")

# get all docs in a given index
# res = es.search(index="test-index", body={"query": {"match_all": {}}})
