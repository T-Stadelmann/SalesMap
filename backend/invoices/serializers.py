from rest_framework import serializers

from invoices.models import Invoice


class InvoiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Invoice
        fields = '__all__'


class InvoiceModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Invoice
        fields = ['application_id', 'nr', 'status', 'net_amount', 'gross_amount', 'date']
