import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { CalcCurrencies } from "../../containers";
import "./Calc.scss";

const Calc = ({
    title,
    currencieTo,
    changeTo,
    changeFrom,
    changeFromValue,
    changeToValue,
    setValue,
    value,
}) => {
    const inputRef = useRef();

    useEffect(() => {
            setValue(inputRef.current, false);
    }, [changeToValue]);

    return (
        <div className="calc">
            <div className="calc__title">{title}</div>
            <CalcCurrencies currencieTo={currencieTo} />
            <div className="calc__input_box">
                <input
                    ref={inputRef}
                    type="number"
                    onChange={(event) => setValue(event.target)}
                    value={value}
                    data-course={changeToValue}
                    className={classNames("calc__input_box__input", {
                        input_from: !currencieTo,
                        input_to: currencieTo,
                    })}
                />
                <div className="calc__input_box_rate">
                    <span>{changeFromValue}</span>{" "}
                    <span>{changeFrom.CharCode}</span> ={" "}
                    <span>{changeToValue}</span>{" "}
                    <span>{changeTo.CharCode}</span>
                </div>
            </div>
        </div>
    );
};

Calc.defaultProps = {
    currencieTo: false,
};

export default Calc;
