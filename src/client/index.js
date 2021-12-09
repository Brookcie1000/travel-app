//import and export all our code for webpack
import "./styles/Global.scss"
import "./styles/Container.scss"
import "./styles/Header.scss"
import "./styles/Location.scss"
import "./styles/Date.scss"
import "./styles/Result.scss"
import "./styles/Footer.scss"
import { getTodayDate } from "./js/setDateforCalendar"
import { updateHTML } from "./js/setDateforCalendar"
import { getUserInput } from "./js/getLocationInput"
import { resetCountryColour } from "./js/getLocationInput"
import { resetCityColour } from "./js/getLocationInput"

export {getTodayDate}
export {updateHTML}
export {getUserInput}
export {resetCountryColour}
export {resetCityColour}
