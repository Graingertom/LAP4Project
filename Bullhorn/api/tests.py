from django.test import TestCase
from rest_framework.test import APIRequestFactory

factory = APIRequestFactory()
post_request = factory.post('/notes/', {'title': 'new idea'})
profile_request = factory.post('/notes/', {'title': 'new idea'})
friends_request = factory.post('/notes/', {'title': 'new idea'})

# Create your tests here.

