FROM python:3.6
ADD ./Bugz /code
WORKDIR /code
RUN pip install -r requirements.txt
CMD ["python", "manage.py", "runserver"]