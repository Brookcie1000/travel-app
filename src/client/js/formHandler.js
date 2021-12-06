import fetch from "node-fetch" //Needed for the jest testing to run properly

const handleSubmit = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value

    console.log("::: Data Submitted :::")
    console.log("==Contacting Server==")
    console.log(`Sending ${formText} to server.`)
    document.getElementById('results').innerHTML = "Results Pending..."
    const apiData = await getAPIDataFromServer("http://localhost:8081/getAPIData", formText) //contact our server hosted on 8081
    .then(apiData => apiData.json())
    .then(function(apiData) {
        if (apiData.confidence == undefined){ //check to see if data is invalid
            alert("Invalid URL, please insert a valid URL") //likely a URL is incorrect, pushed to client

        } else { //else update the UI to display API results
            document.getElementById('results').innerHTML = "The analysis of the link has determined with " + apiData.confidence + "/100 that the article/webpage is: " + apiData.subjectivity + " and is " + apiData.irony

        }
        
    })
} 

const getAPIDataFromServer = async (url, userText) => { //function contacts server to then contact the API

    const res = await fetch(url, {
        // Set the POST data to be sent.
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain'
        },
        // Body data type must match "Content-Type" header        
        body: userText
    })
    
    return res //return the server response
}

export {handleSubmit}
export {getAPIDataFromServer}