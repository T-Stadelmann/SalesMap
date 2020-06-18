from django.urls import path
from deliveries.views import GetCreateAllDeliveries, GetUpdateDeleteDeliveries, GetAllContactDeliveries

urlpatterns = [
    path('', GetCreateAllDeliveries.as_view()),
    path('<int:pk>/', GetUpdateDeleteDeliveries.as_view()),
    path('contact/<int:pk>/', GetAllContactDeliveries.as_view()),
]