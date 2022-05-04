import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import ChangeCalc from "../ChangeCalc";
import { currenciesActions } from "../../redux/actions";
import { Calc } from "../../containers";
import "./Main.scss";

const Main = ({allCurrencies}) => { 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currenciesActions.fetchGetCurrencie());
    }, []);
    
    if(!allCurrencies.length) {
        return null
    }

    return (
        <div className="main">
            <div className="main__header">
                <h2>РЫНОК НАЛИЧНОЙ ВАЛЮТЫ ПО ДАННЫМ ЦБ</h2>
            </div>
            <div className="main__body">
                <Calc title={"У меня есть"}  currencieTo={false}/>
                <ChangeCalc />
                <Calc title={"Хочу приобрести"}  currencieTo />
            </div>
        </div>
    );
};

export default connect(({ currencies }) => ({
    allCurrencies: currencies.allCurrencies,
}))(Main);
