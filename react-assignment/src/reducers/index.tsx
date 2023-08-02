import counterReducers from "./count";
import loggesReducers from "./isLogged";
import {combineReducers} from "redux"

const allReducers=combineReducers({
    counter:counterReducers,
    isLogges:loggesReducers
})

export default allReducers