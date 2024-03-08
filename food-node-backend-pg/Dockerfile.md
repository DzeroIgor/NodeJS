#if we want to work with Dockerfile we need to remove the extension .md of this file

FROM postgres:15.6-bullseye

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=qazwsx
ENV POSTGRES_DB=food_app

