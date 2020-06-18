from rest_framework import serializers

from offers.models import Offer


class OfferSerializer(serializers.ModelSerializer):

    class Meta:
        model = Offer
        fields = '__all__'


class OfferModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Offer
        fields = ['application_id', 'nr', 'status', 'net_amount', 'gross_amount', 'date']
