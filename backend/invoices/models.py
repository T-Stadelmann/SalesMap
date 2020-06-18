from django.db import models

from contacts.models import Contact
from djmoney.models.fields import MoneyField


class Invoice(models.Model):
    application_id = models.DecimalField(verbose_name="application_id", max_digits=100, decimal_places=0, primary_key=True)

    nr = models.CharField(verbose_name="number", max_length=100, blank=True, null=True)
    title = models.CharField(verbose_name="title", max_length=255, blank=True, null=True)
    status = models.CharField(verbose_name='status', max_length=100, blank=True, null=True)

    contact = models.CharField(verbose_name="contact", max_length=255, blank=True, null=True)
    contact_number = models.CharField(verbose_name="contact_number", max_length=255, blank=True, null=True)

    contact_reference = models.ForeignKey(to=Contact, related_name='invoices', on_delete=models.CASCADE)
    project = models.CharField(verbose_name="project", max_length=100, blank=True, null=True)
    contact_person_name = models.CharField(verbose_name="contact_person_name", max_length=100, blank=True, null=True)

    seller = models.CharField(verbose_name='seller', max_length=100, blank=True, null=True)
    currency = models.CharField(verbose_name="currency", max_length=100, blank=True, null=True)
    net_amount = MoneyField(verbose_name="net_amount", max_digits=14, decimal_places=2, default_currency='CHF')

    gross_amount = MoneyField(verbose_name="net_amount", max_digits=14, decimal_places=2, default_currency='CHF')
    date = models.DateField(verbose_name="date", blank=True, null=True)
    due_date = models.DateField(verbose_name="due_date", blank=True, null=True)

    bank_account = models.CharField(verbose_name='bank_account', max_length=255, blank=True, null=True)
    reference = models.CharField(verbose_name='reference', max_length=255, blank=True, null=True)

    payment_method = models.CharField(verbose_name='payment_method', max_length=255, blank=True, null=True)
    additional_text = models.CharField(verbose_name='additional_text', max_length=255, blank=True, null=True)
    service_period = models.CharField(verbose_name='service_period', max_length=255, blank=True, null=True)

    invoice_date = models.DateField(verbose_name="invoice_date", blank=True, null=True)
    invoice_type = models.CharField(verbose_name='invoice_type', max_length=100, blank=True, null=True)
    invoice_payment = models.CharField(verbose_name='invoice_payment', max_length=255, blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True, null=True)
    updated = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f"{self.application_id}: {self.title} - {self.status}" if self.title is not None else f"{self.application_id}: {self.status}"
