from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from contacts.models import Contact
from contacts.resources import ContactResource


class ContactAdmin(ImportExportModelAdmin):
    resource_class = ContactResource


admin.site.register(Contact, ContactAdmin)
