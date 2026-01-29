FROM debian:bookworm

ARG DEBIAN_FRONTEND=noninteractive

# install postgres
RUN apt update --fix-missing
RUN apt install postgresql curl ca-certificates -y

# Install nvm version manager
ENV NVM_VERSION 0.39.7
ENV NVM_DIR /usr/local/nvm
RUN mkdir $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v$NVM_VERSION/install.sh | bash

# Install node
ENV NODE_VERSION 22.13.1
RUN . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Database environment variables
ENV DATABASE_URL_DEV=postgres://postgres:yourpasward@localhost:5432/yourdb
ENV NODE_ENV=development
ENV DB_HOST_TYPE=local

# Google OAuth environment variables
ENV GOOGLE_CLIENT_ID=
ENV GOOGLE_CLIENT_SECRET=
ENV SERVER_URL_PRO=


# copy your project in your work directory
RUN mkdir /app
RUN npm install

COPY . /app


# install packages and build

RUN npm run build

# allow the start script to be executable
RUN chmod +x start.sh

# expose running port
# to ignore all other setted ports as they won\'t be exposed anyway
ENV PORT 4000
EXPOSE 4000



CMD [ "/bin/bash", "./start.sh"]