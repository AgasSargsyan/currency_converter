const initialSatate = {
    allCurrencies: [],
    mainCurrenciesFrom: [],
    mainCurrenciesTo: [],
    changeFrom: {},
    changeTo: {},
};

const reducer = (state = initialSatate, { type, payload }) => {
    switch (type) {
        case "CURRENCIES:GET_ALL":
            return {
                ...state,
                allCurrencies: payload,
                changeFrom: payload.find(
                    (currencie) => currencie.CharCode === "RUR"
                ),
                changeTo: payload.find(
                    (currencie) => currencie.CharCode === "USD"
                ),
            };
        case "CURRENCIES:SELECT_MAIN":
            return {
                ...state,
                mainCurrenciesFrom: payload.filter((currencie) =>
                    ["RUR", "USD", "EUR", "AMD"].indexOf(currencie.CharCode) !=
                    -1
                        ? true
                        : false
                ),
                mainCurrenciesTo: payload.filter((currencie) =>
                    ["RUR", "USD", "EUR", "AMD"].indexOf(currencie.CharCode) !=
                    -1
                        ? true
                        : false
                ),
            };
        case "CURRENCIES:CHAGE_FROM":
            return { ...state, mainCurrenciesFrom: payload };
        case "CURRENCIES:CHAGE_TO":
            return { ...state, mainCurrenciesTo: payload };
        case "CURRENCIES:SET_FROM":
            return { ...state, changeFrom: payload };
        case "CURRENCIES:SET_TO":
            return { ...state, changeTo: payload };
        case "CURRENCIES:SWITCH":
            return {
                ...state,
                changeFrom: payload.changeTo,
                changeTo: payload.changeFrom,
            };
        default:
            return state;
    }
};

export default reducer;

export const currenciesGetAll = (payload) => ({
    type: "CURRENCIES:GET_ALL",
    payload,
});

export const currenciesSelectMain = (payload) => ({
    type: "CURRENCIES:SELECT_MAIN",
    payload,
});

export const changeMainFrom = (payload) => ({
    type: "CURRENCIES:CHAGE_FROM",
    payload,
});

export const changeMainTo = (payload) => ({
    type: "CURRENCIES:CHAGE_TO",
    payload,
});

export const setCurrencieFrom = (payload) => ({
    type: "CURRENCIES:SET_FROM",
    payload,
});

export const setCurrencieTo = (payload) => ({
    type: "CURRENCIES:SET_TO",
    payload,
});

export const switchCurrReducer = (payload) => ({
    type: "CURRENCIES:SWITCH",
    payload,
});

