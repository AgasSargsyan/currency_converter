import { setFromValue, setToValue, switchValueCurrReducer } from "../reducers/changeValue";

const Action = {
    setFrom: (value) => (dispatch) => {
          ;
        dispatch(setFromValue(value));
    },
    setTo: (value) => (dispatch) => {
          ;
        dispatch(setToValue(value));
    },
    switchCurr: (fromValue, toValue) => (dispatch) => {
        dispatch(switchValueCurrReducer({fromValue, toValue}))
    },
};

export default Action;
