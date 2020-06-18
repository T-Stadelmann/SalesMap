from rest_framework import serializers

from orders.models import Order


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = '__all__'


class OrderModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ['application_id', 'nr', 'status', 'net_amount', 'gross_amount', 'date']
