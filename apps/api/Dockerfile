
FROM node:lts

RUN apt-get -qy update && apt-get -qy install openssl

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

# Bundle app source
COPY ./dist/apps/api .
RUN npm install --production
RUN npx prisma generate

EXPOSE 3333

CMD [ "node", "main.js" ]
