import { currenciesGetAll } from "../reducers/currencies";

const Action = {
  fetchGetCurrencie: () => (dispatch) => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => response.json())
      .then((json) => dispatch(currenciesGetAll(Object.values(json.Valute))));
  },
};

export default Action;
