const getLocationInput = async () => {
    const countryInput = document.getElementById("country").value;
    const countryDiv = document.getElementById("country");
    const cityInput = document.getElementById("city").value;
    const cityDiv = document.getElementById("city");
    const postcodeInput = document.getElementById("postcode").value;
    if (countryInput === "Select a Country" || cityInput === "") {
        alert("Country and City Are Required.");

        if (countryInput === "Select a Country") {
            countryDiv.style.backgroundColor = "lightcoral";

        }

        if (cityInput === "") {
            cityDiv.style.backgroundColor = "lightcoral";

        }

    } else {
        const serverRes = await sendLocationToServer("http://localhost:8081/storeLocationData", countryInput, cityInput, postcodeInput);
        try {
            console.log(serverRes);

        } catch(error) {
            console.log(error);

        }

    }

}

const sendLocationToServer = async (url, countryInput, cityInput, postcodeInput) => {
    const userInput = {
        country: countryInput,
        city: cityInput,
        postcode: postcodeInput
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
    try{
        return serverRes.text();

    } catch(error) {
        console.log(error);

    }
    
}

const getDateInput = async () => {
    const DateInput = document.getElementById("date-start").value;
    const serverRes = await sendDateToServer("http://localhost:8081/storeDateData", DateInput);
    try {
        if (serverRes.message === "Please Input Location Data First.") {
            alert(serverRes.message);

        } else {
            console.log("::Server stored date data::");

        }

    } catch(error) {
        console.log(error);

    }

}

const resetCountryColour = () => {
    const countryDiv = document.getElementById("country");
    countryDiv.style.backgroundColor = "white";

}

const resetCityColour = () => {
    const cityDiv = document.getElementById("city");
    cityDiv.style.backgroundColor = "white";
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
    try {
        return serverRes.json();

    } catch(error) {
        console.log(error);

    }

}

export {getLocationInput}
export {resetCountryColour}
export {resetCityColour}
export {sendDateToServer}
export {getDateInput}