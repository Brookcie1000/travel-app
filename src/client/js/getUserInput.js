//import list of icon images
import { iconSelection } from "./iconTest";
//import {t01d, t01n, t02d, t02n, t03d, t03n, t04d, t04n, t05d, t05n, d01d, d01n, d02d, d02n, d03d, d03n, r01d, r01n, r02d, r02n, r03d, r03n, f01d, f01n, r04d, r04n, r05d, r05n, r06d, r06n, s01d, s01n, s02d, s02n, s03d, s03n, s04d, s04n, s05d, s05n, s06d, s06n, a01d, a01n, a02d, a02n, a03d, a03n, a04d, a04n, a05d, a05n, a06d, a06n, c01d, c01n, c02d, c02n, c03d, c03n, c04d, c04n, u00d, u00n} from "./iconTest";

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
            if (serverRes.message === "::Server has saved your location input::") {
                console.log(serverRes.message);

            } else {
                alert(serverRes.message);

            }
            

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
        return await serverRes.json();

    } catch(error) {
        console.log(error);

    }
    
}

const getDateInput = async () => {
    const DateInput = document.getElementById("date-start").value;
    const serverRes = await sendDateToServer("http://localhost:8081/storeDateData", DateInput);
    try {
        if (serverRes.message === "Please Input Valid Location Data First.") {
            alert(serverRes.message);

        } else {
            console.log(serverRes.message);
            const imageData = await getImageData("http://localhost:8081/getImageData");
            try {
                const imageArray = imageData.image.hits;
                if (imageArray.length !== 0) {
                    console.log(imageData.message);
                    updateTextUI(serverRes);
                    updateImageUI(imageArray);

                } else {
                    console.log("::No image found, using default image::")
                }

            } catch(error) {
                console.log(error);

            }

        }

    } catch(error) {
        console.log(error);

    }

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
        return await serverRes.json();

    } catch(error) {
        console.log(error);

    }

}

const getImageData = async (url) => {
    const serverRes = await fetch(url);
    try {
        const APIData = await serverRes.json();
        return APIData;

    } catch(error) {
        console.log(error);

    }

}

const updateTextUI = (weatherInfo) => {
    //Function that when declared checks an array for matching date selected
    const matchDate = (input, index, arr) => {
        const dateInput = document.getElementById("date-start").value;
        if (arr[index].valid_date === dateInput) {
            //implement the icons for the weather
            const iconDiv1 = document.getElementById("icon1");
            const iconDiv2 = document.getElementById("icon2");
            const weatherInfoDiv = document.getElementById("info");
            const iconCode = arr[index].weather.icon;
            const baseIconCode = iconCode.slice(0,(iconCode.length-1)); //remove the day/night element
            const iconObject = iconSelection(baseIconCode); //function in iconTest.js
            iconDiv1.style.backgroundImage = `url(${iconObject.day})`;
            iconDiv2.style.backgroundImage = `url(${iconObject.night})`;
            

            //implement the weather info
            const maxTemp = arr[index].max_temp;
            const minTemp = arr[index].min_temp;
            const rainChance = arr[index].pop;
            const snowAmount = arr[index].snow.toFixed();
            const UVRating = arr[index].uv;

            const maxTempDiv = document.getElementById("maxTemp");
            const minTempDiv = document.getElementById("minTemp");
            const rainDiv = document.getElementById("rain");
            const snowDiv = document.getElementById("snow");
            const UVDiv = document.getElementById("UV");

            maxTempDiv.innerText = `Max Temp: ${maxTemp}°C`;
            minTempDiv.innerText = `Min Temp: ${minTemp}°C`;
            rainDiv.innerText = `Chance of Rain: ${rainChance}%`;
            if (snowAmount > 1) {
                snowDiv.innerText = `Snow Depth: ${snowAmount}mm`;

            } else {
                snowDiv.innerText = "";

            }
            
            UVDiv.innerText = `UV Rating: ${UVRating}`;

            //implement message for weather
            const messageDiv = document.getElementById("weather-message");
            let message = "";

            if ((minTemp < 0) && (snowAmount > 1)) {
                message = `BRRRRRRRRRR it's going to be freezing! Make sure to pack a jacket and catch some snow on your tongue.`

            } else if (minTemp <= 0) {
                message = `BRRRRRRRRRR it's going to be freezing! Make sure to pack a jacket.`

            } else if ((0 < maxTemp) && (maxTemp < 15)) {
                console.log(maxTemp)
                message = `Bit chilly, take your scarf and have a hot drink with you at all times.`

            } else if ((12 < minTemp) && (minTemp < 20) && (maxTemp < 27)) {
                message = `I don't know about you, but a love a warm day and evening.`

            } else if (maxTemp >= 27) {
                message = `oooooooooo looks like it's going to be HOT. Get out the fan from the garage.`

            } else {
                message = `Have a great time, don't forget to check for your passport (if you need it)!`

            }

            messageDiv.innerText = message;

            //give message to user that the API is complete.
            console.log(`::Showing weather for date: ${dateInput}::`);

        }

    }

    //For each weather day, check to match it to user input date.
    weatherInfo.weather.data.forEach(matchDate);

}

const updateImageUI = (imageArray) => {
    const resultPicDiv = document.getElementById("result-pic");
    resultPicDiv.style.backgroundImage = `url(${imageArray[0].largeImageURL})`;

}

const resetCountryColour = () => {
    const countryDiv = document.getElementById("country");
    countryDiv.style.backgroundColor = "white";

}

const resetCityColour = () => {
    const cityDiv = document.getElementById("city");
    cityDiv.style.backgroundColor = "white";
}

export {getLocationInput}
export {resetCountryColour}
export {resetCityColour}
export {sendDateToServer}
export {getDateInput}
export {updateTextUI}