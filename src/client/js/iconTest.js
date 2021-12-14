//import all the icons
import t01d from "../img/weather-icons/t01d.png"
import t01n from "../img/weather-icons/t01n.png"
import t02d from "../img/weather-icons/t02d.png"
import t02n from "../img/weather-icons/t02n.png"
import t03d from "../img/weather-icons/t03d.png"
import t03n from "../img/weather-icons/t03n.png"
import t04d from "../img/weather-icons/t04d.png"
import t04n from "../img/weather-icons/t04n.png"
import t05d from "../img/weather-icons/t05d.png"
import t05n from "../img/weather-icons/t05n.png"
import d01d from "../img/weather-icons/d01d.png"
import d01n from "../img/weather-icons/d01n.png"
import d02d from "../img/weather-icons/d02d.png"
import d02n from "../img/weather-icons/d02n.png"
import d03d from "../img/weather-icons/d03d.png"
import d03n from "../img/weather-icons/d03n.png"
import r01d from "../img/weather-icons/r01d.png"
import r01n from "../img/weather-icons/r01n.png"
import r02d from "../img/weather-icons/r02d.png"
import r02n from "../img/weather-icons/r02n.png"
import r03d from "../img/weather-icons/r03d.png"
import r03n from "../img/weather-icons/r03n.png"
import f01d from "../img/weather-icons/f01d.png"
import f01n from "../img/weather-icons/f01n.png"
import r04d from "../img/weather-icons/r04d.png"
import r04n from "../img/weather-icons/r04n.png"
import r05d from "../img/weather-icons/r05d.png"
import r05n from "../img/weather-icons/r05n.png"
import r06d from "../img/weather-icons/r06d.png"
import r06n from "../img/weather-icons/r06n.png"
import s01d from "../img/weather-icons/s01d.png"
import s01n from "../img/weather-icons/s01n.png"
import s02d from "../img/weather-icons/s02d.png"
import s02n from "../img/weather-icons/s02n.png"
import s03d from "../img/weather-icons/s03d.png"
import s03n from "../img/weather-icons/s03n.png"
import s04d from "../img/weather-icons/s04d.png"
import s04n from "../img/weather-icons/s04n.png"
import s05d from "../img/weather-icons/s05d.png"
import s05n from "../img/weather-icons/s05n.png"
import s06d from "../img/weather-icons/s06d.png"
import s06n from "../img/weather-icons/s06n.png"
import a01d from "../img/weather-icons/a01d.png"
import a01n from "../img/weather-icons/a01n.png"
import a02d from "../img/weather-icons/a02d.png"
import a02n from "../img/weather-icons/a02n.png"
import a03d from "../img/weather-icons/a03d.png"
import a03n from "../img/weather-icons/a03n.png"
import a04d from "../img/weather-icons/a04d.png"
import a04n from "../img/weather-icons/a04n.png"
import a05d from "../img/weather-icons/a05d.png"
import a05n from "../img/weather-icons/a05n.png"
import a06d from "../img/weather-icons/a06d.png"
import a06n from "../img/weather-icons/a06n.png"
import c01d from "../img/weather-icons/c01d.png"
import c01n from "../img/weather-icons/c01n.png"
import c02d from "../img/weather-icons/c02d.png"
import c02n from "../img/weather-icons/c02n.png"
import c03d from "../img/weather-icons/c03d.png"
import c03n from "../img/weather-icons/c03n.png"
import c04d from "../img/weather-icons/c04d.png"
import c04n from "../img/weather-icons/c04n.png"
import u00d from "../img/weather-icons/u00d.png"
import u00n from "../img/weather-icons/u00n.png"

export {t01d, t01n, t02d, t02n, t03d, t03n, t04d, t04n, t05d, t05n, d01d, d01n, d02d, d02n, d03d, d03n, r01d, r01n, r02d, r02n, r03d, r03n, f01d, f01n, r04d, r04n, r05d, r05n, r06d, r06n, s01d, s01n, s02d, s02n, s03d, s03n, s04d, s04n, s05d, s05n, s06d, s06n, a01d, a01n, a02d, a02n, a03d, a03n, a04d, a04n, a05d, a05n, a06d, a06n, c01d, c01n, c02d, c02n, c03d, c03n, c04d, c04n, u00d, u00n};

//checks base icon code from weatherInfo from server side
export const iconSelection = (code) => {

    if (code === "t01") {
        const iconD = t01d;
        const iconN = t01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "t02") {
        const iconD = t02d;
        const iconN = t02n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "t03") {
        const iconD = t03d;
        const iconN = t03n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "t04") {
        const iconD = t04d;
        const iconN = t04n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "t05") {
        const iconD = t05d;
        const iconN = t05n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "d01") {
        const iconD = d01d;
        const iconN = d01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "d02") {
        const iconD = d02d;
        const iconN = d02n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "d03") {
        const iconD = d03d;
        const iconN = d03n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "r01") {
        const iconD = r01d;
        const iconN = r01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "r02") {
        const iconD = r02d;
        const iconN = r02n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "r03") {
        const iconD = r03d;
        const iconN = r03n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "f01") {
        const iconD = f01d;
        const iconN = f01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "r04") {
        const iconD = r04d;
        const iconN = r04n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "r05") {
        const iconD = r05d;
        const iconN = r05n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "r06") {
        const iconD = r06d;
        const iconN = r06n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s01") {
        const iconD = s01d;
        const iconN = s01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s02") {
        const iconD = s02d;
        const iconN = s02n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s03") {
        const iconD = s03d;
        const iconN = s03n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s04") {
        const iconD = s04d;
        const iconN = s04n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s05") {
        const iconD = s05d;
        const iconN = s05n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s01") {
        const iconD = s01d;
        const iconN = s01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s02") {
        const iconD = s02d;
        const iconN = s02n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "s06") {
        const iconD = s06d;
        const iconN = s06n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "a01") {
        const iconD = a01d;
        const iconN = a01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "a02") {
        const iconD = a02d;
        const iconN = a02n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "a03") {
        const iconD = a03d;
        const iconN = a03n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "a04") {
        const iconD = a04d;
        const iconN = a04n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "a05") {
        const iconD = a05d;
        const iconN = a05n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "a06") {
        const iconD = a06d;
        const iconN = a06n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "c01") {
        const iconD = c01d;
        const iconN = c01n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code == "c02") {
        const iconD = c02d;
        const iconN = c02n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "c03") {
        const iconD = c03d;
        const iconN = c03n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "c04") {
        const iconD = c04d;
        const iconN = c04n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

    if (code === "u00") {
        const iconD = u00d;
        const iconN = u00n;
        const iconObject = {day: iconD, night: iconN};
        return iconObject;
    }

}