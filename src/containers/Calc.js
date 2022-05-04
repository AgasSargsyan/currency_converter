import { connect, useDispatch } from "react-redux";
import { Calc as BaseCalc } from "../components";
import { setFromValue, setToValue } from "../redux/reducers/changeValue";

const Calc = ({
    title,
    currencieTo,
    changeFrom,
    changeTo,
    fromValue,
    toValue,
}) => {
    var value, changeToThis, changeFromThis;

    const dispatch = useDispatch();
    if (currencieTo) {
        value = toValue;
        changeFromThis = changeTo;
        changeToThis = changeFrom;
    } else {
        value = fromValue;
        changeFromThis = changeFrom;
        changeToThis = changeTo;
    }

    var changeFromValue = 1;
    var changeToValue = Number(
        (
            changeFromThis.Value /
            changeFromThis.Nominal /
            (changeToThis.Value / changeToThis.Nominal)
        ).toFixed(4)
    );

    const handlerChangeValue = (target, changeSecondInput = true) => {
        const course = target.dataset.course;
        const calcedValue = Number((target.value * course).toFixed(4) / 1);
        if (!changeSecondInput) {
            if (currencieTo) {
                if (
                    toValue !== Number(target.value) &&
                    toValue !== calcedValue &&
                    fromValue !== Number(target.value)
                ) {
                    dispatch(setFromValue(calcedValue));
                }
            } else {
                if (
                    fromValue !== calcedValue &&
                    fromValue !== Number(target.value) &&
                    toValue !== calcedValue
                ) {
                    dispatch(setToValue(calcedValue));
                }
            }
        } else {
            if (currencieTo) {
                dispatch(setFromValue(calcedValue));
                dispatch(setToValue(target.value));
            } else {
                dispatch(setFromValue(target.value));
                dispatch(setToValue(calcedValue));
            }
        }
    };
    return (
        <BaseCalc
            title={title}
            currencieTo={currencieTo}
            changeFrom={changeFromThis}
            changeTo={changeToThis}
            changeFromValue={changeFromValue}
            changeToValue={changeToValue}
            setValue={handlerChangeValue}
            value={value}
        />
    );
};

Calc.defaultProps = {};

export default connect(({ currencies, changeValue }) => ({
    changeFrom: currencies.changeFrom,
    changeTo: currencies.changeTo,
    fromValue: changeValue.fromValue,
    toValue: changeValue.toValue,
}))(Calc);
