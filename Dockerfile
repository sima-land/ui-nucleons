FROM nginx:1.17.0

COPY .docker/assets/ /

COPY ./styleguide /app

WORKDIR /app

EXPOSE 80