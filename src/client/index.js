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

export {getTodayDate}
export {updateHTML}

