const getLocationInput = async () => {
    const countryInput = document.getElementById("country").value;
    const countryDiv = document.getElementById("country");
    const cityInput = document.getElementById("city").value;
    const cityDiv = document.getElementById("city");
    if (countryInput === "Select a Country" || cityInput === "") {
        alert("Please Select a Country and City");

        if (countryInput === "Select a Country") {
            countryDiv.style.backgroundColor = "lightcoral";

        }

        if (cityInput === "") {
            cityDiv.style.backgroundColor = "lightcoral";

        }

    } else {
        const serverRes = await sendLocationToServer("http://localhost:8081/storeLocationData", countryInput, cityInput);

    }

}

const getDateInput = async () => {
    const DateInput = document.getElementById("date-start").value;
    const serverRes = await sendDateToServer("http://localhost:8081/storeDateData", DateInput);

}

const resetCountryColour = () => {
    const countryDiv = document.getElementById("country");
    countryDiv.style.backgroundColor = "white";

}

const resetCityColour = () => {
    const cityDiv = document.getElementById("city");
    cityDiv.style.backgroundColor = "white";
}

const sendLocationToServer = async (url, countryInput, cityInput) => {
    const userInput = {
        country: countryInput,
        city: cityInput
    };

    const serverRes = await fetch(url, {
        // Set the POST data to be sent.
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(userInput)
    })
    
    return console.log("::Server stored location data::") //return a message
}

const sendDateToServer = async (url, dateInput) => {
    const userInput = {
        date: dateInput
    }

    const serverRes = await fetch(url, {
        // Set the POST data to be sent.
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(userInput)
    })

    return console.log("::Server stored date data::")
}

export {getLocationInput}
export {resetCountryColour}
export {resetCityColour}
export {sendDateToServer}
export {getDateInput}