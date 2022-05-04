const initialSatate = {
    fromValue: "",
    toValue: "",
};

const reducer = (state = initialSatate, { type, payload }) => {
    switch (type) {
        case "CHANGE_VALUE:SET_FROM":
            return { ...state, fromValue: payload };
        case "CHANGE_VALUE:SET_TO":
            return { ...state, toValue: payload };
        case "CHANGE_VALUE:SWITCH":
            return {
                ...state,
                fromValue: payload.toValue,
                toValue: payload.fromValue,
            };
        default:
            return state;
    }
};

export default reducer;

export const setFromValue = (payload) => ({
    type: "CHANGE_VALUE:SET_FROM",
    payload,
});

export const setToValue = (payload) => ({
    type: "CHANGE_VALUE:SET_TO",
    payload,
});

export const switchValueCurrReducer = (payload) => ({
    type: "CHANGE_VALUE:SWITCH",
    payload,
});
