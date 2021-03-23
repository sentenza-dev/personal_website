FROM nginxinc/nginx-unprivileged:1-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./sentenza.dev.crt /etc/nginx/conf.d/sentenza.dev.crt
COPY ./sentenza.dev.key /etc/nginx/conf.d/sentenza.dev.key

USER root

RUN mkdir -p /usr/share/sentenza.dev/html
COPY ./build /usr/share/sentenza.dev/html
RUN chmod 755 /usr/share/sentenza.dev/html

USER nginx

