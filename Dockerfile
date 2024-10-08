FROM node:18-alpine

#Working Directory

WORKDIR /app

#To copy my package.json files

COPY package*.json ./

#To install dependencies

RUN npm install

#Copies the entire application code

COPY . .

#Expose the port number

EXPOSE 3030

#The run command for my app

CMD ["node", "app.js"]