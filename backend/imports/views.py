from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from tablib import Dataset
from import_export.formats.base_formats import XLS

from deliveries.models import Delivery
from deliveries.serializers import DeliverySerializer
from deliveries.resources import DeliveriesResource
from invoices.resources import InvoiceResource
from offers.resources import OfferResource
from orders.resources import OrderResource
from contacts.resources import ContactResource
from contact_persons.resources import ContactPersonResource


class ImportFileUpload(GenericAPIView):
    serializer_class = DeliverySerializer
    queryset = Delivery.objects.all()

    def patch(self, request):
        #set up dataset
        dataset = Dataset()
        #get files from front end
        new_import_file = request.FILES['file']
        #check file name
        name = new_import_file.name
        import_resource_2 = False

        #depending on file name - import file to correct db table
        if 'Delivery' in name:
            import_resource = DeliveriesResource()
        if 'Order' in name:
            import_resource = OrderResource()
        if 'Offer' in name:
            import_resource = OfferResource()
        if 'Invoice' in name:
            import_resource = InvoiceResource()
        if 'Contact' in name:
            import_resource = ContactResource()
            import_resource_2 = ContactPersonResource()

       #if the file is xlsx, convert to binary
        if 'xlsx' in name:
            new_name = name.replace('xlsx','xlsb')
            new_import_file.name = new_name
            imported_data = dataset.load(new_import_file.read(), format='xls')
        #if the file type is csv then just use that
        else:
            imported_data = dataset.load(new_import_file.read().decode('utf-8'), format='csv')

        # Test the data import
        result = import_resource.import_data(dataset, dry_run=True)

        if not result.has_errors():
            # Actually import now
            import_resource.import_data(dataset, dry_run=False)

            #if contact, additional upload into contact_persons table
            if import_resource_2 is False:
                return Response("Success")
            else:
                result = import_resource_2.import_data(dataset, dry_run=True)
                if not result.has_errors():
                    # Actually import now
                    import_resource_2.import_data(dataset, dry_run=False)
                return Response("Success")
        else:
            return Response("error")
