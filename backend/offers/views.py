from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from offers.models import Offer
from offers.serializers import OfferSerializer


class GetCreateAllOffers(ListCreateAPIView):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()


class GetUpdateDeleteOffer(RetrieveUpdateDestroyAPIView):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()


class GetAllContactOffers(ListAPIView):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()

    def list(self, request, pk):
        queryset = self.filter_queryset(self.get_queryset())
        new_queryset = queryset.filter(contact_reference=pk)
        serializer = self.get_serializer(new_queryset, many=True)
        return Response(serializer.data)
