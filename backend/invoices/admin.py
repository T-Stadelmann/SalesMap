from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from invoices.models import Invoice
from invoices.resources import InvoiceResource


class InvoicesAdmin(ImportExportModelAdmin):
    resource_class = InvoiceResource


admin.site.register(Invoice, InvoicesAdmin)
