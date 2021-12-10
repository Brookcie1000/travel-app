const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const fetch = require('node-fetch'); //node-fetch version must be less than v3 to use require statement
const { count } = require('console');
const res = require('express/lib/response');

const app = express() //runs the server

app.use(cors()) //allows communication between client and server

app.use(bodyParser.json()) //allows to send and receive text from client in POST

dotenv.config(); //allows local codes for privacy keys

app.use(express.static('dist')) //where the server looks as its root

app.get('/', function (req, res) {
    res.sendFile('dist/index.html') //send the html file on connection
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Travel App listening on port 8081!')
})

//Set variables to store data on server
let locationInput = "";
let dateInput = "";
let arrayOfUserInputs = [];

const storeLocationData = async (req,res) => {
    locationInput = req.body;
    arrayOfUserInputs.push(locationInput);
    const arrayLength = arrayOfUserInputs.length;
    console.log();
    console.log("=================================================")
    console.log(`Received country <${locationInput.country}> and city <${locationInput.city}> from client.`)

    if (arrayOfUserInputs[arrayLength-1].date == undefined) {
        console.log();
        console.log("Getting location info from geonames API");
        console.log("=================================================");
        const APIData = await geonamesFetch();
        try {
            res.send(APIData);

        } catch(error) {
            console.log(error);

        }

    } else {
        console.log("ready to send to API");

    }
    

}

const storeDateData = (req,res) => {
    dateInput = req.body;
    const arrayLength = arrayOfUserInputs.length;
    arrayOfUserInputs[arrayLength-1].date = dateInput.date;
    console.log();
    console.log("=================================================");
    console.log(`Received <${dateInput.date}> as Depart Date`)

    if (arrayOfUserInputs[arrayLength-1].country == undefined || arrayOfUserInputs[arrayLength-1].city == undefined) {
        console.log("There is no city/country input for this request. Reminding user...")
        console.log("=================================================");
        res.send("Need Location Data")

    } else {
        res.end();

    }
    
}

const geonamesFetch = async () => {
    const rootURL = "http://api.geonames.org/searchJSON?";
    const arrayLength = arrayOfUserInputs.length;
    const cityName = "name_equals=" + arrayOfUserInputs[arrayLength-1].city;
    const countryName = "&country=" + arrayOfUserInputs[arrayLength-1].country;
    const APIKey = `&username=${process.env.API_KEY}`
    const resFromAPI = await fetch(rootURL + cityName + countryName + APIKey);

    try {
        console.log(rootURL + cityName + countryName + APIKey);
        const APIData = await resFromAPI.json();
        return APIData;

    } catch(error) {
        console.log(error);

    }

}

app.post('/storeLocationData', storeLocationData); //setup POST connection to server from client
app.post('/storeDateData', storeDateData);