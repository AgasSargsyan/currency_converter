import React from "react";

const CalcCurrencies = ({ mainCurrencies }) => {
  return (
    <div className="calc__currencies">
      {mainCurrencies.map(currencie => (
        <div className="calc__currencies_item">
          <div className="calc__currencies_item_name">{currencie.CharCode}</div>
          <div className="calc__currencies_item_char_code">{currencie.Name}</div>
        </div>
      ))}
      <div className="calc__currencies_more">{"<"}</div>
    </div>
  );
};

export default CalcCurrencies;
