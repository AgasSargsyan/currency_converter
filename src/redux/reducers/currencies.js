const initialSatate = {
  allCurrencies: [],
};

const reducer = (state = initialSatate, { type, payload }) => {
  switch (type) {
    case "CURRENCIES:GET_ALL":
      return { ...state, allCurrencies: payload };
    default:
      return state;
  }
};

export default reducer;

export const currenciesGetAll = (payload) => ({
  type: "CURRENCIES:GET_ALL",
  payload,
});
