from django.urls import path
from imports.views import ImportFileUpload

urlpatterns = [
    path('', ImportFileUpload.as_view()),
]