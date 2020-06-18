from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from orders.models import Order
from orders.resources import OrderResource


class OrdersAdmin(ImportExportModelAdmin):
    resource_class = OrderResource


admin.site.register(Order, OrdersAdmin)
