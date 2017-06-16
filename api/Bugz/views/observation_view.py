from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect, Http404
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from Bugz.views.login_view import LoginViewSet
from Bugz.serializers import *
from Bugz.models import *

from datetime import datetime
from elasticsearch import Elasticsearch
es = Elasticsearch()

import json

# @csrf_exempt

class ObservationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Observations to be viewed or 
    edited.
    """
    queryset = Observation.objects.all()
    serializer_class = ObservationSerializer

# elasticsearch
# save a document
# doc = {
#     'author': 'kimchy',
#     'text': 'Elasticsearch: cool. bonsai cool.',
#     'timestamp': datetime.now(),
# }
# res = es.index(index="test-index", doc_type='tweet', id=1, body=doc)
# print(res['created'])

# # get a document by id
# res = es.get(index="test-index", doc_type='tweet', id=1)
# print(res['_source'])

# # wut dat
# es.indices.refresh(index="test-index")

# # get all docs in a given index
# res = es.search(index="test-index", body={"query": {"match_all": {}}})
# print("Got %d Hits:" % res['hits']['total'])
# for hit in res['hits']['hits']:
#     print("%(timestamp)s %(author)s: %(text)s" % hit["_source"])