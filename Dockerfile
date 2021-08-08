FROM node:14

WORKDIR /app
#rodo archivos que inician en package y terminan en .json
COPY package*.json ./

RUN npm install
#copia todo dentro del container segundo punto es el wordir
COPY . .

CMD [ "npm","start" ]