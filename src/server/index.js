const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const fetch = require('node-fetch') //node-fetch version must be less than v3 to use require statement

const app = express() //runs the server

app.use(cors()) //allows communication between client and server

app.use(bodyParser.text()) //allows to send and receive text from client in POST

dotenv.config(); //allows local codes for privacy keys

app.use(express.static('dist')) //where the server looks as its root

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html') //send the html file on connection
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const getAPIData = async (req,res) => { //function that contacts the API
    const urlRoot = "https://api.meaningcloud.com/sentiment-2.1"
    const urlKey = `?key=${process.env.API_KEY}` //hidden API key, prevents github upload by adding .env to gitignore file
    const urlLang = "&lang=auto"
    let urlLink = "&url=" + req.body //the data sent from client
    console.log(`





    ==========================
    Request from client received: ${req.body}
    ==========================`)
    console.log(`
    ==========================
    sending url to API... please wait
    ==========================`)

    const resFromAPI = await fetch(urlRoot + urlKey + urlLang + urlLink) //call the API and wait for connection

    try{
        console.log(`
        ==========================
        Response from API received
        ==========================`)
        const APIData = await resFromAPI.json() //set the API response to variable
        console.log(`
        ==========================
        Sending API response to client
        ==========================`)
        res.send(APIData) //send API response back to client

        console.log(`
        ==========================
        DONE!
        ==========================`)

    } catch(error) {
        console.log(error)

    }

}

    app.post('/getAPIData', getAPIData) //setup POST connection to server from client