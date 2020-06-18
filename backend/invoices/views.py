from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from invoices.models import Invoice
from invoices.serializers import InvoiceSerializer


class GetCreateAllInvoices(ListCreateAPIView):
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()


class GetUpdateDeleteInvoices(RetrieveUpdateDestroyAPIView):
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()


class GetAllContactInvoices(ListAPIView):
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()

    def list(self, request, pk):
        queryset = self.filter_queryset(self.get_queryset())
        new_queryset = queryset.filter(contact_reference=pk)
        serializer = self.get_serializer(new_queryset, many=True)
        return Response(serializer.data)
