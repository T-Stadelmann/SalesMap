from django.urls import path
from contacts.views import GetCreateAllContacts, GetCreateAllContactsShort, GetUpdateDeleteContact, GetAllContactData

urlpatterns = [
    path('', GetCreateAllContacts.as_view()),
    path('summary/', GetCreateAllContactsShort.as_view()),
    path('<int:pk>/', GetUpdateDeleteContact.as_view()),
    path('summary/<int:pk>/', GetAllContactData.as_view()),
]