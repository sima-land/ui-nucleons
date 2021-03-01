FROM nginx:1.17.0

COPY .build-storybook/assets /

COPY .build-storybook/storybook /app

WORKDIR /app

EXPOSE 80
