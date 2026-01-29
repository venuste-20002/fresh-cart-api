#!/bin/bash

if [ -z "$DEV_DB_HOST" ] || [ "$DEV_DB_HOST" = "127.0.0.1" ] || [ "$DEV_DB_HOST" = "localhost" ]; then
    # If the DEV_DB_* variables are not set, we will use the default values
    if [ -z "$DEV_DB_NAME" ]; then
        export DEV_DB_NAME="farm-ramip-backend-api"
        echo "DEV_DB_NAME is not set. Using default value: farm-ramip-backend-api"
    fi

    if [ -z "$DEV_DB_USERNAME" ]; then
        export DEV_DB_USERNAME="postgres"
        echo "DEV_DB_USERNAME is not set. Using default value: $DEV_DB_USERNAME"
    fi

    if [ -z "$DEV_DB_PASSWORD" ]; then
        export DEV_DB_PASSWORD="bereki20002"
        echo "DEV_DB_PASSWORD is not set. Using default value: $DEV_DB_PASSWORD"
    fi

    service postgresql start
    service postgresql status

    su - postgres -c "createdb $DEV_DB_NAME"
    su - postgres -c "psql -c \"ALTER USER $DEV_DB_USERNAME PASSWORD '$DEV_DB_PASSWORD';\""
fi
echo "Starting the server..."

npm start

echo "started server"

