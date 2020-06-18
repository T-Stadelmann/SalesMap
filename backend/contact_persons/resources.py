from contact_persons.models import ContactPerson
from import_export.fields import Field
from import_export import resources
from import_export.widgets import ForeignKeyWidget

from contacts.models import Contact


class ContactPersonResource(resources.ModelResource):
    contact_reference = Field(attribute='contact_reference', column_name='ID', widget=ForeignKeyWidget(Contact, 'application_id'))
    nr = Field(attribute='nr', column_name='Nr.')

    category = Field(attribute='category', column_name='contact_person 1 category')
    branch = Field(attribute='branch', column_name='contact_person 1 branch')

    lastname = Field(attribute='lastname', column_name='contact_person 1 lastname')
    firstname = Field(attribute='firstname', column_name='contact_person 1 firstname')

    other = Field(attribute='other', column_name='contact_person 1 other')
    title = Field(attribute='title', column_name='contact_person 1 title')

    address = Field(attribute='address', column_name='contact_person 1 address')
    post_code = Field(attribute='post_code', column_name='contact_person 1 post_code')
    city = Field(attribute='city', column_name='contact_person 1 city')
    country = Field(attribute='country', column_name='contact_person 1 country')

    email = Field(attribute='email', column_name='contact_person 1 Email')
    email_2 = Field(attribute='email_2', column_name='contact_person 1 Email 2')

    phone = Field(attribute='phone', column_name='contact_person 1 phone')
    phone_2 = Field(attribute='phone_2', column_name='contact_person 1 phone 2')
    mobile = Field(attribute='mobile', column_name='contact_person 1 Mobile')

    fax = Field(attribute='fax', column_name='contact_person 1 Fax')
    website = Field(attribute='website', column_name='contact_person 1 Website')
    skype = Field(attribute='skype', column_name='contact_person 1 Skype')

    birthday = Field(widget="date", column_name='contact_person 1 birthday')
    notes = Field(attribute='notes', column_name='contact_person 1 notes')
    payment_information = Field(attribute='payment_information', column_name='contact_person 1 payment_information')
    contact_person_name = Field(attribute='contact_person_name', column_name='contact_person 1 contact_person_name')
    method_of_correspondence = Field(attribute='method_of_correspondence', column_name='contact_person 1 method_of_correspondence')
    language = Field(attribute='language', column_name='contact_person 1 language')

    class Meta:
        model = ContactPerson
        widgets = {
            'date': {'format': "'%d.%m.%Y"},
                }
