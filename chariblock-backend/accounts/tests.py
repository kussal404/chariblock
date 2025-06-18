from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model

User = get_user_model()

class AccountTests(APITestCase):

    def setUp(self):
        self.charity_creator_data = {
            'username': 'charity_creator',
            'password': 'securepassword123',
            'email': 'charity@example.com'
        }
        self.donor_data = {
            'username': 'donor_user',
            'password': 'securepassword123',
            'email': 'donor@example.com'
        }

    def test_charity_creator_signup(self):
        response = self.client.post(reverse('charity_signup'), self.charity_creator_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'charity_creator')

    def test_donor_signup(self):
        response = self.client.post(reverse('donor_signup'), self.donor_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'donor_user')

    def test_login(self):
        self.client.post(reverse('charity_signup'), self.charity_creator_data)
        response = self.client.post(reverse('login'), {
            'username': 'charity_creator',
            'password': 'securepassword123'
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_login_invalid_credentials(self):
        response = self.client.post(reverse('login'), {
            'username': 'invalid_user',
            'password': 'wrongpassword'
        })
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)