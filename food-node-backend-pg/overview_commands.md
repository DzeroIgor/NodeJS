# install image
      v
docker pull postgres:15.6-bullseye

# view list of instal images
      v
docker image ls

# view list of instal containers
      v
docker ps
# view list of all containers
      v
docker ps --all

# running image
      v
docker run --name food-test-pg -e POSTGRES_PASSWORD=qazwsx postgres:15.6-bullseye



# Dockerfile commands

# build new image in base of image postgres:15.6-bullseye with configurations from Dockerfile
docker build -t food-pg-image-1 .

# build container
docker run --name food-pg-container food-pg-image-1


# CMD

psql -U postgres -h localhost -p 5432
password: postgres

psql -U postgres -h localhost -p 7777
password: qazwsx



# run  the terminal into container

docker exec -it "CONTAINER_NAME" /bin/sh
docker exec -it food-node-backend-pg-pgdb-1 /bin/sh

\l List of databases

\du List of roles