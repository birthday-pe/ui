FROM node:alpine

ENV API_KEY AIzaSyDOYC0bU8-N9jk5Y5RRN4OTucuIzBIz9Cw

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start