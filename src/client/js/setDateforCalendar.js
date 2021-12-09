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

    updateHTML(year, month, day);

}

const updateHTML = (year, month, day) => {
    const htmlElement = document.getElementById("date-start")
    htmlElement.min = `${year}-${month}-${day}`
    htmlElement.value = `${year}-${month}-${day}`

}

getTodayDate();

export {getTodayDate}
export {updateHTML}