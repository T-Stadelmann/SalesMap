from django.urls import path
from invoices.views import GetCreateAllInvoices, GetUpdateDeleteInvoices, GetAllContactInvoices

urlpatterns = [
    path('', GetCreateAllInvoices.as_view()),
    path('<int:pk>/', GetUpdateDeleteInvoices.as_view()),
    path('contact/<int:pk>/', GetAllContactInvoices.as_view()),

]