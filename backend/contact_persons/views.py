from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from contact_persons.models import ContactPerson
from contact_persons.serializers import ContactPersonSerializer


class GetCreateAllContactPersons(ListCreateAPIView):
    serializer_class = ContactPersonSerializer
    queryset = ContactPerson.objects.all()


class GetUpdateDeleteContactPersons(RetrieveUpdateDestroyAPIView):
    serializer_class = ContactPersonSerializer
    queryset = ContactPerson.objects.all()


class GetCompanyContactPersons(ListCreateAPIView):
    serializer_class = ContactPersonSerializer
    queryset = ContactPerson.objects.all()
