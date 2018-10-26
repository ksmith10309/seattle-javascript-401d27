# Vanilla REST API with Persistence

## Overview
This application is a server with POST, GET, and DELETE functionality

## Getting Started
- Clone this repository
- Ensure node.js is installed
    - If not, run the command `brew install node` in the terminal
- Navigate to the `/09-rest-persistence/lab` directory and run the command `npm i` to install dependencies
- Create a .env file and set PORT to 8080
- The server is set to in-memory storage by default
    - To switch to file-system storage, set STORAGE to filesystem in the .env file
- Run the command `node index.js` to start the server


## Testing Instructions
- Open up Postman
    - Postman can be downloaded at [https://www.getpostman.com/](https://www.getpostman.com/)

- To make a POST request:
    - Click on the dropdown and change it to POST
    - Type `localhost:8080/api/v1/notes` in the address bar
    - Click on the Body tab and set it to raw
    - In the body, type a note in JSON with title and content
        - { "title": "[title]", "content": "[content]" }
    - Click Send

- To make a GET request:
    - Click on the dropdown and change it to GET
    - Type `localhost:8080/api/v1/notes?id=<uuid>` in the address bar
    - Click Send
    
- To make a DELETE request:
    - Click on the dropdown and change it to DELETE
    - Type `localhost:8080/api/v1/notes?id=<uuid>` in the address bar
    - Click Send