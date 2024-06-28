#!/usr/bin/env bash

docker rm -f maretraite_ui || :
docker-compose up -d --build --force-recreate
