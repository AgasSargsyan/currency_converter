import { CalcCurrencies as BaseCalcCurrencies } from "../components";
import { connect, useDispatch } from "react-redux";
import { currenciesActions, changeValueActions } from "../redux/actions";

const CalcCurrencies = ({
    currencieTo,
    allCurrencies,
    mainCurrenciesFrom,
    mainCurrenciesTo,
    changeFrom,
    changeTo,
}) => {
    const dispatch = useDispatch();
    const mainCurr = currencieTo ? changeTo : changeFrom;
    var mainCurrs = currencieTo ? mainCurrenciesTo : mainCurrenciesFrom;
    var mainCurrencies = [...mainCurrs];

    const handlerSelectList = (e) => {
        const currenciesList = document.getElementsByClassName(
            "calc__currencies_list"
        );
        Array.from(currenciesList).forEach((elem) => {
            if (
                elem.isEqualNode(e.currentTarget) &&
                !elem.classList.contains("active")
            ) {
                elem.classList.add("active");
            } else if (
                (elem.isEqualNode(e.currentTarget) &&
                    elem.classList.contains("active")) ||
                !elem.isEqualNode(e.currentTarget)
            ) {
                elem.classList.remove("active");
            }
        });
    };

    const handlerSelectCurrencie = (e) => {
        document
            .getElementsByClassName("calc__currencies_list")[0]
            .classList.remove("active");

        const selectCur = findCur(e.currentTarget.dataset.cur);
        dispatch(currenciesActions.setCurrencie(selectCur, currencieTo));
    };

    const handlerListCurrencie = (e) => {
        const setectCurCode = e.currentTarget.dataset.cur;
        const selectCur = findCur(setectCurCode);

        if (
            mainCurrencies.filter((cur) => cur.CharCode === setectCurCode)
                .length
        ) {
            dispatch(currenciesActions.setCurrencie(selectCur, currencieTo));
            return;
        }
        

        mainCurrencies.splice(mainCurrencies.length - 1, 1, selectCur);
        dispatch(currenciesActions.changeMain(mainCurrencies, currencieTo));
        dispatch(currenciesActions.setCurrencie(selectCur, currencieTo));
    };

    const findCur = (charCode) => {
        return allCurrencies.find((cur) => cur.CharCode === charCode);
    };

    return (
        <BaseCalcCurrencies
            mainCurr={mainCurr}
            currencieTo={currencieTo}
            allCurrencies={allCurrencies}
            mainCurrencies={mainCurrencies}
            handlerSelectCurrencie={handlerSelectCurrencie}
            handlerSelectList={handlerSelectList}
            handlerListCurrencie={handlerListCurrencie}
        />
    );
};

CalcCurrencies.defaultProps = {
    allCurrencies: [],
    mainCurrencies: [],
};

export default connect(({ currencies }) => ({
    allCurrencies: currencies.allCurrencies,
    mainCurrenciesFrom: currencies.mainCurrenciesFrom,
    mainCurrenciesTo: currencies.mainCurrenciesTo,
    changeFrom: currencies.changeFrom,
    changeTo: currencies.changeTo,
}))(CalcCurrencies);
