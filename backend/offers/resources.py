from import_export.fields import Field
from import_export import resources, widgets

from offers.models import Offer
from contacts.models import Contact


class FKWidget(widgets.ForeignKeyWidget):
    def clean2(self, value, row=None, *args, **kwargs):
        return float(value)

    def clean(self, value, row=None, *args, **kwargs):
        val = self.clean2(value)
        return self.get_queryset(value, row, *args, **kwargs).get(**{self.field: val})


class OfferResource(resources.ModelResource):
    application_id = Field(attribute='application_id', column_name='ID')

    nr = Field(attribute='nr', column_name='Nr.')
    title = Field(attribute='title', column_name='title')
    status = Field(attribute='status', column_name='status')

    contact_reference = Field(attribute='contact_reference', column_name='contact_reference', widget=FKWidget(Contact, 'application_id'))
    contact = Field(attribute='contact', column_name='contact')
    contact_number = Field(attribute='contact_number', column_name='contact_number')

    project = Field(attribute='project', column_name='project')
    contact_person_name = Field(attribute='contact_person_name', column_name='contact_person_name')
    seller = Field(attribute='seller', column_name='seller')

    currency = Field(attribute='currency', column_name='currency')
    net_amount = Field(attribute='net_amount', column_name='net_amouny')
    gross_amount = Field(attribute='gross_amount', column_name='gross_amoount')

    date = Field(widget="date", column_name="date")
    due_date = Field(widget='date', column_name='due_date')

    bank_account = Field(attribute='bank_account', column_name='bank_account')

    class Meta:
        model = Offer
        import_id_fields = ('application_id',)
        widgets = {
                'date': {'format': "'%d.%m.%Y"},
                }
