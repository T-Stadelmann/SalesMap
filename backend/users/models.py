from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser (USERNAME_FIELD and passwords are always required)
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    def __str__(self):
        return f'User {self.id}: {self.email}'

