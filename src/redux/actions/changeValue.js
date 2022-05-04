import { setFromValue, setToValue, switchValueCurrReducer } from "../reducers/changeValue";

const Action = {
    setFrom: (value) => (dispatch) => {
        debugger;
        dispatch(setFromValue(value));
    },
    setTo: (value) => (dispatch) => {
        debugger;
        dispatch(setToValue(value));
    },
    switchCurr: (fromValue, toValue) => (dispatch) => {
        dispatch(switchValueCurrReducer({fromValue, toValue}))
    },
};

export default Action;
