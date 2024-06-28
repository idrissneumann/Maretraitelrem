ARG NGINX_VERSION=1.15

# Stage run

FROM nginx:${NGINX_VERSION} AS maretraite_ui

COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY .docker/nginx/docker-entrypoint.sh /docker-entrypoint.sh

COPY assets /usr/share/nginx/html/assets

COPY index.html /usr/share/nginx/html/index.html

COPY mentions-legales.html /usr/share/nginx/html/mentions-legales.html

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD [ "nginx", "-g","daemon off;" ]
