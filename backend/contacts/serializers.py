from rest_framework import serializers


from contacts.models import Contact
from contact_persons.serializers import ContactPersonModelSerializer

from deliveries.serializers import DeliveryModelSerializer
from invoices.serializers import InvoiceModelSerializer
from offers.serializers import OfferModelSerializer
from orders.serializers import OrderModelSerializer


class ContactSerializer(serializers.ModelSerializer):
    contact_persons = ContactPersonModelSerializer(read_only=True)
    orders = OrderModelSerializer(read_only=True, many=True)
    offers = OfferModelSerializer(read_only=True, many=True)
    deliveries = DeliveryModelSerializer(read_only=True, many=True)
    invoices = InvoiceModelSerializer(read_only=True, many=True)

    class Meta:
        model = Contact
        fields = '__all__'


class ContactSummarySerializer(serializers.ModelSerializer):
    contact_persons = ContactPersonModelSerializer(read_only=True, many=True)
    orders = OrderModelSerializer(read_only=True, many=True)
    offers = OfferModelSerializer(read_only=True, many=True)
    deliveries = DeliveryModelSerializer(read_only=True, many=True)
    invoices = InvoiceModelSerializer(read_only=True, many=True)

    class Meta:
        model = Contact
        fields = '__all__'


class ContactShortSummarySerializer(serializers.ModelSerializer):
    contact_persons = serializers.StringRelatedField(many=True)
    delivery = DeliveryModelSerializer(many=True)
    invoices = InvoiceModelSerializer(many=True)
    offers = OfferModelSerializer(many=True)
    orders = OrderModelSerializer(many=True)

    class Meta:
        model = Contact
        fields = [ 'application_id',
                   'name_1',
                  'address',
                   'post_code',
                  'contact_persons',
                  'delivery',
                  'invoices',
                  'offers',
                  'orders',
                  'longitude',
                  'latitude'
                     ]
