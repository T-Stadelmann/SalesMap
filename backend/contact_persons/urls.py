from django.urls import path
from contact_persons.views import GetCreateAllContactPersons, GetUpdateDeleteContactPersons, GetCompanyContactPersons

urlpatterns = [
    path('', GetCreateAllContactPersons.as_view()),
    path('<int:pk>/', GetUpdateDeleteContactPersons.as_view()),
    path('company/<int:pk>/', GetCompanyContactPersons.as_view()),
]