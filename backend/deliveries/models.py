from django.db import models
from constants.choices import SERVICE_STATUS

from contacts.models import Contact


class Delivery(models.Model):
    application_id = models.DecimalField(verbose_name="application_id", max_digits=100, decimal_places=0, primary_key=True)

    nr = models.CharField(verbose_name="number", max_length=100, blank=True, null=True)
    title = models.CharField(verbose_name="title", max_length=255, blank=True, null=True)
    status = models.CharField(verbose_name='Status', max_length=255, choices=SERVICE_STATUS, default='Erledigt')

    contact = models.CharField(verbose_name="contact", max_length=255, blank=True, null=True)
    contact_number = models.CharField(verbose_name="contact_number", max_length=100, blank=True, null=True)
    contact_reference = models.ForeignKey(to=Contact, related_name='delivery', on_delete=models.CASCADE)

    project = models.CharField(verbose_name="project", max_length=100, blank=True, null=True)
    contact_person_name = models.CharField(verbose_name="contact_person_name", max_length=100, blank=True, null=True)
    seller = models.CharField(verbose_name='seller', max_length=100, blank=True, null=True)
    currency = models.CharField(verbose_name="currency", max_length=100, blank=True, null=True)

    date = models.DateField(verbose_name="date", blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True, null=True)
    updated = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f"{self.application_id}: {self.title} - {self.status}" if self.title is not None else f"{self.application_id}: {self.status}"
