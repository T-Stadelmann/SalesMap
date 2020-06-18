from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response
from tablib import Dataset

from deliveries.models import Delivery
from deliveries.serializers import DeliverySerializer
from deliveries.resources import DeliveriesResource


class GetCreateAllDeliveries(ListCreateAPIView):
    serializer_class = DeliverySerializer
    queryset = Delivery.objects.all()


class GetUpdateDeleteDeliveries(RetrieveUpdateDestroyAPIView):
    serializer_class = DeliverySerializer
    queryset = Delivery.objects.all()


class GetAllContactDeliveries(ListAPIView):
    serializer_class = DeliverySerializer
    queryset = Delivery.objects.all()

    def list(self, request, pk):
        queryset = self.filter_queryset(self.get_queryset())
        new_queryset = queryset.filter(contact_reference=pk)
        serializer = self.get_serializer(new_queryset, many=True)
        return Response(serializer.data)

