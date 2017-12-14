FROM python:2.7

RUN mkdir -p /usr/src/mappr/athena
WORKDIR /usr/src/mappr/athena

COPY athena /usr/src/mappr/athena/athena
COPY tests /usr/src/mappr/athena/tests
COPY venv /usr/src/mappr/athena/venv
COPY *.conf /usr/src/mappr/athena/
COPY *.ini /usr/src/mappr/athena/
COPY *.py /usr/src/mappr/athena/
COPY *.sh /usr/src/mappr/athena/
COPY *.txt /usr/src/mappr/athena/

RUN pip install -r requirements.txt

CMD [ "python", "athena.py" ]