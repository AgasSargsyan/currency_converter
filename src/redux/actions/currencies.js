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
                const allCurrencies = Object.values(json.Valute);
                allCurrencies.unshift(RUR);

                const changeFrom = allCurrencies.find(
                    (currencie) => currencie.CharCode === "RUR"
                );
                const changeTo = allCurrencies.find(
                    (currencie) => currencie.CharCode === "USD"
                );

                dispatch(
                    currenciesGetAll({ changeFrom, changeTo, allCurrencies })
                );
                const mainCurrencies =  allCurrencies.filter((currencie) =>
                    ["RUR", "USD", "EUR", "AMD"].indexOf(currencie.CharCode) !=
                    -1
                        ? true
                        : false
                );
                dispatch(currenciesSelectMain(mainCurrencies));
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
