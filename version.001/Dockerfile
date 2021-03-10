FROM node:12.18.1
WORKDIR /code
RUN npm install pm2 -g
COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
CMD ["pm2-runtime", "app.js"]
EXPOSE 9091
