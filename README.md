# Travel App using multiple API connections.

The goal of this repo is to demonstrate a multi-API app that allows for a user to input their travel details and get real info on their holiday travels.

## Get Up and Running (unfinished)
1) Download/clone the repo to your local PC
2) Install all the needed modules: node, express, etc. (look inside the package.json for a list of modules)
3) in GIT Bash (or any terminal):
    >For Production: type into the terminal 'npm run build-prod'
    > For Development [used for the following steps]: type into the terminal 'npm run build-dev'
4) You MUST possess API keys from: geonames, weatherbit, and pixabay
    > Inside the root folder, create a .env file that matches the variables in the /src/client/js/getUserInput.js for each of the APIs used. Save this file with the keys.
5) In ANOTHER terminal we have to run the server to save the client input.
    >Type into the NEW terminal 'npm run start'
6) The server should begin to run and display its port 8081, this can be changed if you wish.
7) If you're running using the 'build-dev' (see step 3), a webpage should have already opened. You can input your location and date, and it will return some information.



