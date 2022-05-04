import {combineReducers} from "redux";

const reducers = ['currencies', "changeValue"]

export default combineReducers(
    reducers.reduce((initial, name) => {
      initial[name] = require(`./${name}`).default
      return initial
    }, {})
)