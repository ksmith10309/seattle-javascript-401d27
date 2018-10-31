# Express and Babel

## Overview
This application is a server with POST, GET, DELETE, and PUT functionality

## Getting Started
- Clone this repository
- Ensure node.js is installed
    - If not, run the command `brew install node` in the terminal
- Navigate to the `/11-express/lab` directory and run the command `npm i` to install dependencies
- Create a .env file and set PORT to 8080
- Run the command `node index.js` to start the server

## Testing Instructions
- Open up Postman
    - Postman can be downloaded at [https://www.getpostman.com/](https://www.getpostman.com/)

- To make a POST request:
    - Click on the dropdown and change it to POST
    - Type `localhost:8080/api/v1/calendar` in the address bar
    - Click on the Body tab and set it to raw
    - In the body, type a note in JSON with month and date
        - { "month": "[month]", "date": "[date]" }
    - Click Send

- To make a GET request:
    - Click on the dropdown and change it to GET
    - Type `localhost:8080/api/v1/calendar/:id` in the address bar
    - Click Send
    
- To make a DELETE request:
    - Click on the dropdown and change it to DELETE
    - Type `localhost:8080/api/v1/calendar/:id` in the address bar
    - Click Send

- To make a PUT request:
    - Click on the dropdown and change it to PUT
    - Type `localhost:8080/api/v1/calendar/:id` in the address bar
    - Click on the Body tab and set it to raw
    - In the body, type a note in JSON with month and date
        - { "month": "[month]", "date": "[date]" }
    - Click Send