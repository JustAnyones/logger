# Dockerfile
FROM node:21-alpine3.18

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade

# Install dependencies
COPY ./package-lock.json /app/
COPY ./package.json /app/
RUN npm install

# Copy over the other files
COPY ./src /app/src/
COPY ./index.js /app/
COPY ./primary.js /app/
COPY ./replica.js /app/

CMD ["node", "index.js"]