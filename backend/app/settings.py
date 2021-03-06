"""
Django settings for luna project.

Generated by 'django-admin startproject' using Django 3.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'z=kx)j8*+k9#2*+w@4obwxpzr^f4ht4na2oeq0$xuxc@292wgc'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',
    'import_export',
    'cities_light',
    'djmoney',

    'users',
    'contact_persons',
    'contacts',
    'deliveries',
    'invoices',
    'offers',
    'orders',
    'imports',

]

IMPORT_EXPORT_USE_TRANSACTIONS = True

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware'
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'


DATABASES = {
     'default': {
         'ENGINE': 'django.db.backends.postgresql',
         'NAME': os.environ.get('POSTGRES_DB'),
         "PORT": os.environ.get('POSTGRES_PORT'),
         "HOST": os.environ.get('POSTGRES_HOST'),
         "USER": os.environ.get('POSTGRES_USER'),
         "PASSWORD": os.environ.get('POSTGRES_PASSWORD'),
     }
  }

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static-files/'
MEDIA_URL = '/media-files/'
MEDIA_ROOT = '/media-files'
STATIC_ROOT = os.path.join(BASE_DIR, "/static-files/")


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema'
}


from datetime import timedelta
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=5)
}


AUTH_USER_MODEL = 'users.User'

CORS_ORIGIN_ALLOW_ALL = True

CITIES_LIGHT_TRANSLATION_LANGUAGES = ['de']
CITIES_LIGHT_INCLUDE_COUNTRIES = ['CH']
CITIES_POSTAL_CODES = ['CH']

# List of plugins to process data during import
CITIES_PLUGINS = [
    'cities.plugin.postal_code_ch.Plugin',  # Canada postal codes need region codes remapped to match geonames
    'cities.plugin.reset_queries.Plugin',  # plugin that helps to reduce memory usage when importing large datasets (e.g. "allCountries.zip")
]

# Import cities without region (default False)
CITIES_IGNORE_EMPTY_REGIONS = True

# This setting may be specified if you use 'cities.plugin.reset_queries.Plugin'
CITIES_PLUGINS_RESET_QUERIES_CHANCE = 1.0 / 1000000
