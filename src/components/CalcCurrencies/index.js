import React from "react";
import arrowAllCurrencies from "../../assets/arrow_all_currencies.png";
import arrowAllCurrenciesWhite from "../../assets/arrow_all_currencies_white.png";
import classNames from "classnames";
import "./CalcCurrencies.scss";

const CalcCurrencies = ({
  mainCurrencies,
  currencies,
  listCurrenciesPositionLeft,
}) => {
  console.log(listCurrenciesPositionLeft);
  return (
    <div className="calc__currencies">
      {mainCurrencies.map((mainCurrencie) => (
        // active
        <div className="calc__currencies_item" key={mainCurrencie.ID}>
          <span className="calc__currencies_item_char_code">
            {mainCurrencie.CharCode}
          </span>
          <div className="calc__currencies_item_name">{mainCurrencie.Name}</div>
        </div>
      ))}
      {/* active */}
      <div className="calc__currencies_list"> 
        <div className="calc__currencies_list_icons">
          <img src={arrowAllCurrencies} alt="" />
          <img src={arrowAllCurrenciesWhite} alt="" />
        </div>
        <div
          className={classNames("calc__currencies_list_body container", {
            "currencies_list_position_left": listCurrenciesPositionLeft,
          })}
        > <div className="row gy-5">
          {currencies.map((currencie) => (
            <div className="calc__currencies_list_item col col-sm-4" key={currencie.ID} data-cur={currencie.CharCode}>
              <div className="calc__currencies_list_item_name">
                {currencie.Name}
              </div>
              <div className="calc__currencies_list_item_char_code">
                {currencie.CharCode}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

CalcCurrencies.defaultProps = {
  listCurrenciesPositionLeft: false
}

export default CalcCurrencies;
