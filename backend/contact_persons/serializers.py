from rest_framework import serializers

from contact_persons.models import ContactPerson


class ContactPersonSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactPerson
        fields = '__all__'


class ContactPersonModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactPerson
        fields = ['id', 'firstname', 'lastname', 'phone']


