# TCP Chat Server

## Overview
This application is a chatroom that is run on Node.js

## Getting Started
- Clone this repository
- Ensure node.js is installed
    - If not, run the command `brew install node` in the terminal
- Navigate to the lab-06 directory and run the command `npm i` to install dependencies
- Run the command `npm start` to start the chatroom

## Chatroom Instructions
- Open a new terminal window
- Ensure telnet is installed
    - If not, run the command `brew install telnet` in the terminal
- Find out your IP address
- Run the command `telnet your-IP-address 3000` to enter the chatroom

## Chatroom Commands
- `@nickname [new-name]` - use this command to change your nickname
- `@list` - use this command to list everyone in the chatroom
- `@all [message]` - use this command to send a message to everyone in the chatroom
- `@dm [to-username] [message]` - use this command to send a private message
- `@quit` - use this command to leave the chatroom