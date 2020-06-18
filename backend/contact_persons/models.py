from django.db import models
from constants.choices import category, contact_method
from contacts.models import Contact

class ContactPerson(models.Model):
    nr = models.CharField(verbose_name="number", max_length=100, blank=True, null=True)

    category = models.CharField(verbose_name="category", choices=category, max_length=100, blank=True, null=True)
    branch = models.CharField(verbose_name="contact_method", max_length=100,blank=True, null=True)
    contact_method = models.CharField(verbose_name="contact_method", choices=contact_method, max_length=100,blank=True, null=True)

    lastname = models.CharField(verbose_name="lastname", max_length=100, blank=True, null=True)
    firstname = models.CharField(verbose_name='firstname', max_length=100, blank=True, null=True)

    other = models.CharField(verbose_name="other", max_length=100, blank=True, null=True)
    title = models.CharField(verbose_name="title", max_length=100, blank=True, null=True)

    address = models.CharField(verbose_name='address', max_length=255, blank=True, null=True)
    post_code = models.CharField(verbose_name="post_code", max_length=100, blank=True, null=True)
    city = models.CharField(verbose_name=city, max_length=100, blank=True, null=True)
    country = models.CharField(verbose_name="country", max_length=100, blank=True, null=True)

    email = models.CharField(verbose_name="email", max_length=100, blank=True, null=True)
    email_2 = models.CharField(verbose_name="email_2", max_length=100, blank=True, null=True)

    phone = models.CharField(verbose_name='phone', max_length=100, blank=True, null=True)
    phone_2 = models.CharField(verbose_name="phone_2", max_length=100, blank=True, null=True)
    mobile = models.CharField(verbose_name="mobile", max_length=100, blank=True, null=True)

    fax = models.CharField(verbose_name='fax', max_length=100, blank=True, null=True)
    website = models.CharField(verbose_name="website", max_length=100, blank=True, null=True)
    skype = models.CharField(verbose_name="skype", max_length=100, blank=True, null=True)

    birthday = models.DateField(verbose_name="birthday", blank=True, null=True)
    notes = models.CharField(verbose_name='notes', max_length=255, blank=True, null=True)

    payment_information = models.CharField(verbose_name='payment_information', max_length=255, blank=True, null=True)
    contact_person_name = models.CharField(verbose_name="contact_person_name", max_length=100, blank=True, null=True)
    method_of_correspondence = models.CharField(verbose_name="method_of_correspondence", max_length=100, blank=True, null=True)
    language = models.CharField(verbose_name="language", max_length=255, blank=True, null=True)

    contact_reference = models.ForeignKey(to=Contact, related_name='contact_persons', on_delete=models.CASCADE)

    created = models.DateTimeField(auto_now_add=True, null=True)
    updated = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):

        return self.firstname + " " + self.lastname
