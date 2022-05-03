import { currenciesGetAll, currenciesSelectMain, changeMainFrom, changeMainTo, setCurrencieFrom, setCurrencieTo } from "../reducers/currencies";

const Action = {
    fetchGetCurrencie: () => (dispatch) => {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((response) => response.json())
            .then((json) => {
                const valute = Object.values(json.Valute);
                dispatch(currenciesGetAll(valute));
                dispatch(currenciesSelectMain(valute));
            });
    },
    changeMain: (mainCurrencies, currencieTo) => (dispatch) => {
        if(currencieTo) {
            dispatch(changeMainTo(mainCurrencies))
        } else {
            dispatch(changeMainFrom(mainCurrencies))
        }
    },
    setCurrencie: (currencie, currencieTo) => (dispatch) => {
        if(currencieTo) {
            dispatch(setCurrencieTo(currencie))
        } else {
            dispatch(setCurrencieFrom(currencie))
        }
    }
};

export default Action;
