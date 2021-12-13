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
    console.log(`Received country <${locationInput.country}>, city <${locationInput.city}>, and postcode <${locationInput.postcode}> from client.`)

    if (arrayOfUserInputs[arrayLength-1].date == undefined) {
        console.log();
        console.log("Getting location info from geonames API");
        const APIData = await geonamesFetch();
        try {
            arrayOfUserInputs[arrayLength-1].lat = `${APIData.postalCodes[0].lat}`;
            arrayOfUserInputs[arrayLength-1].lng = `${APIData.postalCodes[0].lng}`;
            arrayOfUserInputs[arrayLength-1].imageTag = `${APIData.postalCodes[0].adminName1}`
            console.log(arrayOfUserInputs);
            res.send({
                locationData: APIData,
                message: "::Server has saved your location input::"
            });

        } catch(error) {
            console.log(error);
            res.send({message: "Country/City Not Supported."});

        }

    } else {
        console.log("ready to get weather data");

    }
    

}

const storeDateData = async (req,res) => {
    dateInput = req.body;
    const arrayLength = arrayOfUserInputs.length;
    if (arrayOfUserInputs.length === 0) {
        console.log("=================================================");
        console.log("There is no city/country input for this request. Reminding user...");
        console.log("=================================================");
        res.send({message: "Please Input Location Data First."});
    } else {
        arrayOfUserInputs[arrayLength-1].date = dateInput.date;
        console.log();
        console.log("=================================================");
        console.log(`Received <${dateInput.date}> as Depart Date`);
        console.log(arrayOfUserInputs[arrayLength-1]);
        console.log("=================================================");
        const APIData = await weatherbitFetch();
        try {
            res.send({
                weather: APIData,
                message: "::Server has stored date input::"
                });

        } catch(error) {
            console.log(error);

        }

    }
    
}

const getImageData = async (req,res) => {
    const arrayLength = arrayOfUserInputs.length;
    const keyword = arrayOfUserInputs[arrayLength-1].imageTag;
    const APIData = await pixabayFetch(keyword);
    try {
        res.send({
            image: APIData,
            message: "::Image fetched::"
        })

    } catch(error) {
        console.log(error);

    }

}

const geonamesFetch = async () => {
    const rootURL = "http://api.geonames.org/postalCodeSearchJSON?";
    const arrayLength = arrayOfUserInputs.length;
    const cityName = "placename=" + arrayOfUserInputs[arrayLength-1].city;
    const countryName = "&country=" + arrayOfUserInputs[arrayLength-1].country;
    const postcodeName = "&postalcode=" + arrayOfUserInputs[arrayLength-1].postcode;
    const APIKey = `&username=${process.env.API_KEY_GEO}` //key located in .env file
    const resFromAPI = await fetch(rootURL + cityName + countryName + postcodeName + APIKey);
    try {
        console.log();
        console.log("=================================================");
        console.log("Fetching...");
        console.log(rootURL + cityName + countryName + postcodeName + APIKey);
        const APIData = await resFromAPI.json();
        console.log();
        console.log("Sent API data back to client")
        console.log("=================================================");
        return APIData;

    } catch(error) {
        console.log(error);

    }

}

const weatherbitFetch = async () => {
    const rootURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
    const arrayLength = arrayOfUserInputs.length;
    const lat = "&lat=" + arrayOfUserInputs[arrayLength-1].lat;
    const lng = "&lon=" + arrayOfUserInputs[arrayLength-1].lng;
    const numDays = "&days=16"; //get the max forecast
    const APIKey = `&key=${process.env.API_KEY_WEA}` //key located in .env file
    const resFromAPI = await fetch(rootURL + lat + lng + numDays + APIKey)
    try {
        console.log();
        console.log("=================================================");
        console.log("Fetching...");
        console.log(rootURL + lat + lng + numDays + APIKey);
        const APIData = await resFromAPI.json();
        console.log();
        console.log("Sent API data back to client")
        console.log("=================================================");
        return APIData;

    } catch(error) {
        console.log(error);

    }

}

const pixabayFetch = async (keyword) => {
    const rootURL = "https://pixabay.com/api/?";
    const keyWord = "q=" + keyword;
    const imageType = "&image_type=photo";
    const cat = "&category=travel"
    const APIKey = `&key=${process.env.API_KEY_PIC}` //key located in .env file
    const resFromAPI = await fetch(rootURL + keyWord + imageType + cat + APIKey);
    try {
        console.log();
        console.log("=================================================");
        console.log("Fetching...");
        console.log(rootURL + keyWord + imageType + cat + APIKey);
        const APIData = resFromAPI.json();
        console.log();
        console.log("Sent API data back to client")
        console.log("=================================================");
        return APIData;

    } catch(error) {
        console.log(error);

    }


}

app.post('/storeLocationData', storeLocationData); //setup POST connection to server from client
app.post('/storeDateData', storeDateData);
app.get('/getImageData', getImageData);