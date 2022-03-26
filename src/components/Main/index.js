import React from "react";
import ChangeCalc from "../ChangeCalc";
import Calc from "../Calc";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__header">
        <h2>РЫНОК НАЛИЧНОЙ ВАЛЮТЫ ПО ДАННЫМ ЦБ</h2>
      </div>
      <div className="main__body">
        <Calc title={"У меня есть"}/>
        <ChangeCalc />
        <Calc title={"Хочу приобрести"} listCurrenciesPositionLeft={'true'}/>
      </div>
    </div>
  );
};

export default Main;
