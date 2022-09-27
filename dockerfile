#Projede hangi kütüphane kullanıldı.
FROM node:16

#Projenin kaynak dosyalarını nereye kopyalacak.
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src ./

EXPOSE 8080
CMD [ "node", "index.js" ]