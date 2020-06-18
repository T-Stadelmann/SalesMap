from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from offers.models import Offer
from offers.resources import OfferResource


class OffersAdmin(ImportExportModelAdmin):
    resource_class = OfferResource


admin.site.register(Offer, OffersAdmin)
