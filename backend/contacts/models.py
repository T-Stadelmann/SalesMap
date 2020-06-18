from django.db import models
from constants.choices import contact_method, method_of_correspondence, category
from geopy.geocoders import Nominatim


class Contact(models.Model):
    application_id = models.FloatField(verbose_name="application_id", primary_key=True)
    nr = models.CharField(verbose_name="number", max_length=100, blank=True, null=True)

    category = models.CharField(verbose_name="category", choices=category, default='Kunden', max_length=100, blank=True, null=True)
    branch = models.CharField( verbose_name='branch', max_length=100, blank=True, null=True)
    contact_method = models.CharField(verbose_name="contact_method", choices=contact_method, max_length=100, default='Firma', blank=True, null=True)

    name_1 = models.CharField(verbose_name="name_1", max_length=100)
    name_2 = models.CharField(verbose_name='name_2', max_length=100, blank=True, null=True)
    other = models.CharField(verbose_name="other", max_length=100, blank=True, null=True)

    title = models.CharField(verbose_name="title", max_length=100, blank=True, null=True)

    address = models.CharField(verbose_name='address', max_length=255)
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

    method_of_correspondence = models.CharField(verbose_name="method_of_correspondence", max_length=100, choices=method_of_correspondence, default='Mail', blank=True, null=True)
    notes = models.CharField(verbose_name='notes', max_length=255, blank=True, null=True)
    contact_person_name = models.CharField(verbose_name="contact_person_name", max_length=100, blank=True, null=True)

    language = models.CharField(verbose_name="language", max_length=100, blank=True, null=True)
    MWST_nr = models.CharField(verbose_name='MWST_nummer', max_length=100, blank=True, null=True)
    number_of_employees = models.CharField(verbose_name="number_of_employees", max_length=255, blank=True, null=True)
    registration_number = models.CharField(verbose_name="handelsregister", max_length=255, blank=True, null=True)
  
    created = models.DateTimeField(auto_now_add=True, null=True)
    updated = models.DateTimeField(auto_now=True, null=True)

    latitude = models.CharField(verbose_name="latitude", max_length=25, blank=True, null=True)
    longitude = models.CharField(verbose_name="longitude", max_length=25, blank=True, null=True)

    @property
    def get_latitude(self):
        geolocator = Nominatim()
        geo_coords = geolocator.geocode(f"{self.address}, {self.city} {self.post_code}, {self.country}")
        return geo_coords.latitude if geo_coords is not None else None

    @property
    def get_longitude(self):
        geolocator = Nominatim()
        geo_coords = geolocator.geocode(f"{self.address}, {self.city} {self.post_code}, {self.country}")
        return geo_coords.longitude if geo_coords is not None else None

    def save(self, *args, **kwargs):
        self.latitude = self.get_latitude
        self.longitude = self.get_longitude
        super(Contact, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.application_id}: {self.name_1}"
