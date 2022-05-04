import React from "react";
import { useDispatch, connect } from "react-redux";
import "./ChangeCalc.scss";
import changeCalcPng from "../../assets/change_calc.png";
// import { currenciesActions, changeValueActions } from "../../redux/actions";
import { switchValueCurrReducer } from '../../redux/reducers/changeValue';
import { switchCurrReducer } from '../../redux/reducers/currencies';


const ChangeCalc = ({ changeFrom, changeTo, fromValue, toValue }) => {
    const dispatch = useDispatch();
    return (
        <div
            className="change__calc"
            onClick={() => {
                dispatch(switchCurrReducer({changeFrom, changeTo}));
                dispatch(switchValueCurrReducer({fromValue, toValue}));
            }}
        >
            <img src={changeCalcPng} alt="" />
        </div>
    );
};

export default connect(({ currencies, changeValue }) => ({
    changeFrom: currencies.changeFrom,
    changeTo: currencies.changeTo,
    fromValue: changeValue.fromValue,
    toValue: changeValue.toValue,
}))(ChangeCalc);
