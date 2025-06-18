from rest_framework import serializers
from .models import CharityCreator, Donor, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class CharityCreatorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = CharityCreator
        fields = ['id', 'organization_name', 'wallet_address', 'user']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user_data['user_type'] = 'charity_creator'
        user = User.objects.create_user(**user_data)
        charity_creator = CharityCreator.objects.create(user=user, **validated_data)
        return charity_creator

class DonorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Donor
        fields = ['id', 'wallet_address', 'user']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user_data['user_type'] = 'donor'
        user = User.objects.create_user(**user_data)
        donor = Donor.objects.create(user=user, **validated_data)
        return donor