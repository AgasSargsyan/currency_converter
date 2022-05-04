import {
    currenciesGetAll,
    currenciesSelectMain,
    changeMainFrom,
    changeMainTo,
    setCurrencieFrom,
    setCurrencieTo,
    switchCurrReducer,
} from "../reducers/currencies";

const RUR = {
    ID: "1",
    Name: "Российский рубль",
    Nominal: 1,
    CharCode: "RUR",
    Previous: 1,
    Value: 1,
};

const Action = {
    fetchGetCurrencie: () => (dispatch) => {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((response) => response.json())
            .then((json) => {
                const valute = Object.values(json.Valute);
                valute.unshift(RUR);
                dispatch(currenciesGetAll(valute));
                dispatch(currenciesSelectMain(valute));
            });
    },
    changeMain: (mainCurrencies, currencieTo) => (dispatch) => {
        if (currencieTo) {
            dispatch(changeMainTo(mainCurrencies));
        } else {
            dispatch(changeMainFrom(mainCurrencies));
        }
    },
    setCurrencie: (currencie, currencieTo) => (dispatch) => {
        if (currencieTo) {
            dispatch(setCurrencieTo(currencie));
        } else {
            dispatch(setCurrencieFrom(currencie));
        }
    },
    switchCurr: (changeFrom, changeTo) => (dispatch) => {
        dispatch(switchCurrReducer({ changeFrom, changeTo }));
    },
};

export default Action;
