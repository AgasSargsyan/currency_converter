import { Calc as BaseCalc } from "../components";
import { connect, useDispatch } from "react-redux";
import { currenciesActions } from "../redux/actions";
import { useEffect } from "react";

const Calc = ({
  title,
  listCurrenciesPositionLeft,
  allCurrencies,
  mainCurrencies,
}) => {
  const dispatch = useDispatch();
  const mainCharCodes = ["RUR", "USD", "EUR", "AMD"]
  useEffect(() => {
    dispatch(currenciesActions.fetchGetCurrencie());
    // if (allCurrencies.length) {     
    //   mainCurrencies = allCurrencies.map((currencie) => mainCharCodes.indexOf(currencie.CharCode));
    // }
  }, []);

  console.log(allCurrencies);
  return (
    <BaseCalc
      title={title}
      listCurrenciesPositionLeft={listCurrenciesPositionLeft}
      allCurrencies={allCurrencies}
      mainCurrencies={mainCurrencies}
    />
  );
};

export default connect(({ currencies }) => ({
  allCurrencies: currencies.allCurrencies,
}))(Calc);
