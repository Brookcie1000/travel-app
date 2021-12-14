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
            const iconDiv1 = document.getElementById("icon1");
            const iconDiv2 = document.getElementById("icon2");
            const weatherInfoDiv = document.getElementById("info");

            let iconCode = arr[index].weather.icon;
            iconCode = iconCode.slice(0,(iconCode.length-1));
            iconDiv1.style.backgroundImage = `url(./src/client/img/weather-icons/${iconCode}d.png)`;
            iconDiv2.style.backgroundImage = `url(./src/client/img/weather-icons/${iconCode}n.png)`;
            console.log(`::Showing weather for date: ${dateInput}::`);

        }

    }

    //For each weather day, check to match it to user input date.
    weatherInfo.weather.data.forEach(matchDate);
    //iconSelection(weatherInfo)

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