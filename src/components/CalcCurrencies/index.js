import React, { useState } from "react";
import arrowAllCurrencies from "../../assets/arrow_all_currencies.png";
import arrowAllCurrenciesWhite from "../../assets/arrow_all_currencies_white.png";
import classNames from "classnames";
import "./CalcCurrencies.scss";

const CalcCurrencies = ({
  mainCurrencies,
  allCurrencies,
  listCurrenciesPositionLeft,
}) => {
  const [showList, setShowList] = useState(false)

  const handlerSelectCurrencie = (e) => {
    const elems = e.currentTarget.parentNode.childNodes;
    Array.from(elems).forEach((elem) => {
      if (
        !elem.isEqualNode(e.currentTarget) &&
        elem.classList.contains("calc__currencies_item")
      ) {
        elem.classList.remove("active");
      }
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="calc__currencies">
      {mainCurrencies.map((mainCurrencie) => (
        <div
          className="calc__currencies_item"
          key={mainCurrencie.ID}
          onClick={event => handlerSelectCurrencie(event)}
          data-cur={mainCurrencie.CharCode}
        >
          <span className="calc__currencies_item_char_code">
            {mainCurrencie.CharCode}
          </span>
          <div className="calc__currencies_item_name">{mainCurrencie.Name}</div>
        </div>
      ))}
      <div className={classNames("calc__currencies_list", {'active' : showList})} onClick={() => setShowList(!showList)}>
        <div className="calc__currencies_list_icons">
          <img src={arrowAllCurrencies} alt="" />
          <img src={arrowAllCurrenciesWhite} alt="" />
        </div>
        <div
          className={classNames("calc__currencies_list_body container", {
            currencies_list_position_left: listCurrenciesPositionLeft,
          })}
        >
          <div className="row">
            {allCurrencies.map((currencie) => (
              <div
                className="calc__currencies_list_item col col-sm-4"
                key={currencie.ID}
                data-cur={currencie.CharCode}
              >
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
  listCurrenciesPositionLeft: false,
};

export default CalcCurrencies;
