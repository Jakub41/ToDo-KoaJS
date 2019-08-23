FROM node:latest

WORKDIR /home/app
USER node
ENV PORT 4000

COPY ormconfig.docker.json ./ormconfig.json

EXPOSE 4000

ENTRYPOINT /bin/bash