FROM node:alpine
ADD ./FrontEnd /code
WORKDIR /code
RUN cd lib/ && npm install http-server -g
CMD ["http-server"]
