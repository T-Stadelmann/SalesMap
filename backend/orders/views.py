from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from orders.models import Order
from orders.serializers import OrderSerializer


class GetCreateAllOrders(ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


class GetUpdateDeleteOrder(RetrieveUpdateDestroyAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


class GetAllContactOrders(ListAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def list(self, request, pk):
        queryset = self.filter_queryset(self.get_queryset())
        new_queryset = queryset.filter(contact_reference=pk)
        serializer = self.get_serializer(new_queryset, many=True)
        return Response(serializer.data)
