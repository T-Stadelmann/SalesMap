from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView

from contacts.models import Contact
from contacts.serializers import ContactSerializer, ContactSummarySerializer, ContactShortSummarySerializer


class GetCreateAllContacts(ListCreateAPIView):
    serializer_class = ContactSummarySerializer
    queryset = Contact.objects.all()


class GetUpdateDeleteContact(RetrieveUpdateDestroyAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class GetAllContactData(RetrieveAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class GetCreateAllContactsShort(ListCreateAPIView):
    serializer_class = ContactShortSummarySerializer
    queryset = Contact.objects.all()