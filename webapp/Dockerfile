FROM node:alpine
ADD ./FrontEnd /code
WORKDIR /code
RUN cd lib/ && npm install http-server -g
EXPOSE 8080
CMD ["http-server"]
