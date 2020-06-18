python manage.py migrate
python manage.py collectstatic
rm -rf /frontend/build/* && cp -r /frontend_tmp/* /frontend
gunicorn -w 4 -b 0.0.0.0:8000 app.wsgi:application
