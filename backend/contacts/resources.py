from contacts.models import Contact
from import_export.fields import Field
from import_export import resources


class ContactResource(resources.ModelResource):
    application_id = Field(attribute='application_id', column_name='ID')
    nr = Field(attribute='nr', column_name='Nr.')

    category = Field(attribute='category', column_name='category')
    branch = Field(attribute='branch', column_name='branch')
    contact_method = Field(attribute='contact_method', column_name='contact_method')
    name_1 = Field(attribute='name_1', column_name='Name 1')
    name_2 = Field(attribute='name_2', column_name='Name 2')

    other = Field(attribute='other', column_name='other')
    title = Field(attribute='title', column_name='title')

    address = Field(attribute='address', column_name='address')
    post_code = Field(attribute='post_code', column_name='post_code')
    city = Field(attribute='city', column_name='city')
    country = Field(attribute='country', column_name='country')

    email = Field(attribute='email', column_name='Email')
    email_2 = Field(attribute='email_2', column_name='Email 2')

    phone = Field(attribute='phone', column_name='phone')
    phone_2 = Field(attribute='phone_2', column_name='phone 2')
    mobile = Field(attribute='mobile', column_name='Mobile')

    fax = Field(attribute='fax', column_name='Fax')
    website = Field(attribute='website', column_name='Website')
    skype = Field(attribute='skype', column_name='Skype')

    birthday = Field(widget="date", column_name='birthday')
    notes = Field(attribute='notes', column_name='notes')

    method_of_correspondence = Field(attribute='method_of_correspondence', column_name='method_of_correspondence')
    contact_person_name = Field(attribute='contact_person_name', column_name='contact_person_name')

    language = Field(attribute='language', column_name='language')
    number_of_employees = Field(attribute='number_of_employees', column_name='number_of_employees')
    registration_number = Field(attribute='registration_number', column_name='registration_nr')


    class Meta:
        model = Contact
        import_id_fields = ('application_id',)
        widgets = {
            'date': {'format': "'%d.%m.%Y"},
                }
