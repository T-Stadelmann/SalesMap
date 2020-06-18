from django.urls import path
from orders.views import GetCreateAllOrders, GetUpdateDeleteOrder, GetAllContactOrders

urlpatterns = [
    path('', GetCreateAllOrders.as_view()),
    path('<int:pk>/', GetUpdateDeleteOrder.as_view()),
    path('contact/<int:pk>/', GetAllContactOrders.as_view()),

]