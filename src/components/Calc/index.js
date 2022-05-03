import React from "react";
import CalcCurrencies from "../../containers/CalcCurrencies";
import "./Calc.scss";


const Calc = ({ title, currencieTo }) => {
 
  return (
    <div className="calc">
      <div className="calc__title">{title}</div>
      <CalcCurrencies
        currencieTo={currencieTo}
      />
      <div className="calc__input_box">
        <input type="number" className="calc__input_box__input"/>
        <div className="calc__input_box_rate">1 RUR = 1 RUR</div>
      </div>
    </div>
  );
};

Calc.defaultProps = {
  currencieTo: false,
}

export default Calc;
