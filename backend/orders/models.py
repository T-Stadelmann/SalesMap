from django.db import models
from constants.choices import service_status
from contacts.models import Contact
from djmoney.models.fields import MoneyField


class Order(models.Model):
    application_id = models.DecimalField(verbose_name="application_id", max_digits=100, decimal_places=0, primary_key=True)

    nr = models.CharField(verbose_name="number", max_length=100, blank=True, null=True)
    title = models.CharField(verbose_name="title", max_length=255, blank=True, null=True)
    status = models.CharField(verbose_name='Status', max_length=255, choices=service_status)

    contact_reference = models.ForeignKey(to=Contact, related_name='orders', on_delete=models.CASCADE)
    contact = models.CharField(verbose_name="contact", max_length=255, blank=True, null=True)
    contact_number = models.CharField(verbose_name="contact_number", max_length=255, blank=True, null=True)

    project = models.CharField(verbose_name="project", max_length=100, blank=True, null=True)
    contact_person_name = models.CharField(verbose_name="contact_person_name", max_length=100, blank=True, null=True)
    seller = models.CharField(verbose_name='seller', max_length=100, blank=True, null=True)

    net_amount = MoneyField(verbose_name="net_amount", max_digits=14, decimal_places=2, default_currency='CHF')
    gross_amount = MoneyField(verbose_name="gross_amount", max_digits=14, decimal_places=2, default_currency='CHF')

    date = models.DateField(verbose_name="date", blank=True, null=True)
    due_date = models.DateField(verbose_name="due_date", blank=True, null=True)

    bank_account = models.CharField(verbose_name='bank_account', max_length=255, blank=True, null=True)
    reference = models.CharField(verbose_name="reference", max_length=255, blank=True, null=True)

    currency = models.CharField(verbose_name="currency", max_length=100, blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True, null=True)
    updated = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f"{self.application_id}: {self.title} - {self.status}" if self.title is not None else f"{self.application_id}: {self.status}"
