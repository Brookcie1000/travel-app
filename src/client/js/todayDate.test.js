import 'regenerator-runtime' //Needed for jest
import {getTodayDate} from './todayDate'

test("should return today's date", () => {
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

    const todayDate = getTodayDate();
    expect(todayDate.one).toBe(day)
    expect(todayDate.two).toBe(month)
    expect(todayDate.three).toBe(year)

})