from django.urls import path
from offers.views import GetCreateAllOffers, GetUpdateDeleteOffer, GetAllContactOffers

urlpatterns = [
    path('', GetCreateAllOffers.as_view()),
    path('<int:pk>/', GetUpdateDeleteOffer.as_view()),
    path('contact/<int:pk>/', GetAllContactOffers.as_view()),

]