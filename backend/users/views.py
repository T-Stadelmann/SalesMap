from django.shortcuts import render

from .serializers import UserSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAdminUser

from django.contrib.auth import get_user_model
User = get_user_model()

class ListCreatePostView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

    def perform_create(self, serializer):
        serializer.save(buyer=self.request.user)
        serializer.save()

class GetUpdateDeletePostView(RetrieveUpdateDestroyAPIView):
        queryset = User.objects.all()
        serializer_class = UserSerializer
        lookup_url_kwarg = 'user_id'