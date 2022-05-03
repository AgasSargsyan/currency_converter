import React from "react";
import classNames from "classnames";
import "./CalcCurrencies.scss";
import arrowAllCurrencies from "../../assets/arrow_all_currencies.png";
import arrowAllCurrenciesWhite from "../../assets/arrow_all_currencies_white.png";

const CalcCurrencies = ({
    mainCurrencies,
    allCurrencies,
    currencieTo,
    handlerSelectCurrencie,
    handlerSelectList,
    handlerListCurrencie,
}) => {
    return (
        <div className="calc__currencies">
            {mainCurrencies.length &&
                mainCurrencies.map((mainCurrencie) => (
                    <div
                        className={classNames("calc__currencies_item", {
                            active: mainCurrencie.active
                        })}
                        key={mainCurrencie.ID}
                        onClick={(event) => handlerSelectCurrencie(event)}
                        data-cur={mainCurrencie.CharCode}
                    >
                        <span className="calc__currencies_item_char_code">
                            {mainCurrencie.CharCode}
                        </span>
                        <div className="calc__currencies_item_name">
                            {mainCurrencie.Name}
                        </div>
                    </div>
                ))}
            <div
                className={"calc__currencies_list"}
                onClick={(event) => handlerSelectList(event)}
            >
                <div className="calc__currencies_list_icons">
                    <img src={arrowAllCurrencies} alt="" />
                    <img src={arrowAllCurrenciesWhite} alt="" />
                </div>
                <div
                    className={classNames(
                        "calc__currencies_list_body container",
                        {
                            currencies_list_position_left: currencieTo,
                        }
                    )}
                >
                    <div className="row">
                        {allCurrencies.map((currencie) => (
                            <div
                                className={classNames("calc__currencies_list_item col col-sm-4", {active: currencie.active})}
                                key={currencie.ID}
                                data-cur={currencie.CharCode}
                                onClick={(event) => handlerListCurrencie(event)}
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

export default CalcCurrencies;
