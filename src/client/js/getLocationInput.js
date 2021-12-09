const getUserInput = async () => {
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
        const serverRes = await sendToServer("http://localhost:8081/storeLocationData", countryInput, cityInput);

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

const sendToServer = async (url, countryInput, cityInput) => {
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

export {getUserInput}
export {resetCountryColour}
export {resetCityColour}