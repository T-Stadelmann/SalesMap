from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from contact_persons.models import ContactPerson
from contact_persons.resources import ContactPersonResource


class ContactPersonAdmin(ImportExportModelAdmin):
    resource_class = ContactPersonResource


admin.site.register(ContactPerson, ContactPersonAdmin)
