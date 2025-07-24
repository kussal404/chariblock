from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.utils import timezone
from .models import Donation
from .serializers import DonationSerializer, DonationCreateSerializer
from charities.models import Charity

@api_view(['POST'])
def record_donation(request):
    """Record a new donation"""
    serializer = DonationCreateSerializer(data=request.data)
    
    if serializer.is_valid():
        try:
            charity = Charity.objects.get(id=serializer.validated_data['charity_id'])
        except Charity.DoesNotExist:
            return Response(
                {'error': 'Charity not found'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check if donation with this tx_hash already exists
        if Donation.objects.filter(tx_hash=serializer.validated_data['tx_hash']).exists():
            return Response(
                {'error': 'Donation with this transaction hash already exists'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create donation
        donation = Donation.objects.create(
            charity=charity,
            donor_address=serializer.validated_data['donor_address'],
            amount=serializer.validated_data['amount'],
            tx_hash=serializer.validated_data['tx_hash'],
            confirmed=True,  # For simplicity, we'll mark as confirmed immediately
            confirmed_at=timezone.now()
        )
        
        # Update charity raised amount
        charity.raised_amount += donation.amount
        charity.save()
        
        response_serializer = DonationSerializer(donation)
        return Response(response_serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_donations(request):
    """List all donations"""
    charity_id = request.GET.get('charity_id')
    donor_address = request.GET.get('donor_address')
    
    donations = Donation.objects.all()
    
    if charity_id:
        donations = donations.filter(charity_id=charity_id)
    
    if donor_address:
        donations = donations.filter(donor_address=donor_address)
    
    serializer = DonationSerializer(donations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_donation(request, donation_id):
    """Get specific donation by ID"""
    try:
        donation = Donation.objects.get(id=donation_id)
        serializer = DonationSerializer(donation)
        return Response(serializer.data)
    except Donation.DoesNotExist:
        return Response(
            {'error': 'Donation not found'}, 
            status=status.HTTP_404_NOT_FOUND
        )