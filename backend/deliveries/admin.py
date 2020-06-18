from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from deliveries.models import Delivery
from deliveries.resources import DeliveriesResource


class DeliveriesAdmin(ImportExportModelAdmin):
    resource_class = DeliveriesResource


admin.site.register(Delivery, DeliveriesAdmin)
