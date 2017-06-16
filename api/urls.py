    
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from Bugz.views import *

router = routers.DefaultRouter()
# router.register(r'insect', insect_view.InsectViewSet)
router.register(r'observation', observation_view.ObservationViewSet)
router.register(r'news', news_view.NewsViewSet)

urlpatterns = [
    url(r'^login$', LoginViewSet.login_user, name='login'),
    url(r'^logout$', LoginViewSet.logout_user, name='logout'),
    url(r'^register$', register_user, name='register'),
    # url(r'^observation$', save_observation, name='observation'),
    # url(r'^news$', print_news, name='news'),
    url(r'^', include(router.urls)),
    url(r'^api-token-auth/', obtain_auth_token),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]