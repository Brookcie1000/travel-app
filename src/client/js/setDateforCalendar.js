const getTodayDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) {
        day = "0" + day;

    }

    if (month < 10) {
        month = "0" + month;

    }

    return {one: day, two: month, three: year}

}

const updateHTML = (year, month, day) => {
    const date = new Date();
    let maxDay = day + 15;
    let maxMonth = date.getMonth() + 1;
    let maxYear;
    const htmlElement = document.getElementById("date-start")
    htmlElement.min = `${year}-${month}-${day}`
    //below checks for the changing months and years for max dates
    if ((month === "01") || (month === "03") || (month === "05") || (month === "07" || (month === "08") || (month === 10) || (month === 12))) {
        if (maxDay > 31) {
            maxDay = (day + 15) - 31;
            maxDay = "0" + maxDay;
            maxMonth = maxMonth + 1;

            if (maxMonth < 10) {
                maxMonth = "0" + maxMonth;

            }

            if (maxMonth > 12) {
                maxMonth = "01";
                maxYear = year + 1;

            }
            
        }

    } else {
        if (maxDay > 30) {
            maxDay = (day + 15) - 30;
            maxMonth = maxMonth + 1;

            console.log(maxMonth)
            if (maxMonth < 10) {
                maxMonth = "0" + max;

            }

        }

    }
    htmlElement.max = `${maxYear}-${maxMonth}-${maxDay}` //set the max date to 16 day forecast the API supplies.
    htmlElement.value = `${year}-${month}-${day}`

}

const currentDate = getTodayDate(); //store the date

updateHTML(currentDate.three, currentDate.two, currentDate.one); //update the date on page

export {getTodayDate}
export {updateHTML}