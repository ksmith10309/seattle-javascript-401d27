# Vanilla HTTP Server

## Overview
This application is a server that allows clients to make GET and POST requests

## Getting Started
- Clone this repository
- Ensure node.js is installed
    - If not, run the command `brew install node` in the terminal
- Navigate to the lab-07 directory and run the command `npm i` to install dependencies
- Create a .env file and set PORT to 3000
- Run the command `node index.js` to start the server

## Browser Instructions
- Open a new browser window
- Navigate to `localhost:3000`
- Click on the cowsay link
- To make a GET request, simply change the text in the address bar and hit enter

## Postman Instructions
- Open up Postman
    - Postman can be downloaded at [https://www.getpostman.com/](https://www.getpostman.com/)
- To make a POST request in Postman:
    - Click on the dropdown and change it to POST
    - Type `localhost:3000/api/cowsay` in the address bar
    - Click on the Body tab and set it to raw
    - In the body, type a message in JSON
        - {"text": "[message]"}
    - Click Send