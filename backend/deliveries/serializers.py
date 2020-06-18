from rest_framework import serializers

from deliveries.models import Delivery


class DeliverySerializer(serializers.ModelSerializer):

    class Meta:
        model = Delivery
        fields = '__all__'


class DeliveryModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Delivery
        fields = ['application_id', 'nr', 'status', 'date']
        depth = 1

