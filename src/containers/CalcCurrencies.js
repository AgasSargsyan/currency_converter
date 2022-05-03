import { CalcCurrencies as BaseCalcCurrencies } from "../components";
import { connect, useDispatch } from "react-redux";
import { currenciesActions } from "../redux/actions";


const RUR = {
    ID: "1",
    Name: "Российский рубль",
    CharCode: "RUR",
};

const CalcCurrencies = ({
    currencieTo,
    allCurrencies,
    mainCurrenciesFrom,
    mainCurrenciesTo,
}) => {
    const dispatch = useDispatch();

    var mainCur = currencieTo ? mainCurrenciesTo : mainCurrenciesFrom;
    var mainCurrencies = [...mainCur];
    
    if (mainCurrencies.length === 3) {
        mainCurrencies.unshift(RUR);
    }
    
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
        const elems = e.currentTarget.parentNode.childNodes;
        const setectCurCode = e.currentTarget.dataset.cur;
        Array.from(elems).forEach((elem) => {
            if (!elem.isEqualNode(e.currentTarget)) {
                elem.classList.remove("active");
            }
        });

        e.currentTarget.classList.add("active");
        
        const selectCur = findCur(setectCurCode)
        dispatch(currenciesActions.setCurrencie(selectCur, currencieTo))
    };


    const handlerListCurrencie = (e) => {
        const setectCurCode = e.currentTarget.dataset.cur;
        if (
            mainCurrencies.filter((cur) => cur.CharCode === setectCurCode).length
        ) {
            return;
        }
        const selectCur = findCur(setectCurCode)
        // selectCur.active = true
        mainCurrencies.splice(mainCurrencies.length - 1, 1, selectCur);
        dispatch(currenciesActions.changeMain(mainCurrencies, currencieTo));
    };

    const findCur = (charCode) => {
        return allCurrencies.find(
            (cur) => cur.CharCode === charCode
        );
    }

    return (
        <BaseCalcCurrencies
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
