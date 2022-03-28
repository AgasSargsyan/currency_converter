import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CalcCurrencies from "../CalcCurrencies";
import "./Calc.scss";

const obj = [
  {
    ID: "1",
    CharCode: "RUR",
    Name: "aa",
  },
  {
    ID: "2",
    CharCode: "USD",
    Name: "aa",
  },
  {
    ID: "3",
    CharCode: "EUR",
    Name: "aa",
  },
  {
    ID: "4",
    CharCode: "AMD",
    Name: "aa",
  },
];

const obj1 = [
  {
    ID: "R01010",
    NumCode: "036",
    CharCode: "AUD",
    Nominal: 1,
    Name: "Австралийский доллар",
    Value: 71.9575,
    Previous: 76.9174,
  },
  {
    ID: "R01020A",
    NumCode: "944",
    CharCode: "AZN",
    Nominal: 1,
    Name: "Азербайджанский манат",
    Value: 56.6375,
    Previous: 60.8337,
  },
  {
    ID: "R01035",
    NumCode: "826",
    CharCode: "GBP",
    Nominal: 1,
    Name: "Фунт стерлингов",
    Value: 126.694,
    Previous: 136.0395,
  },
  {
    ID: "R01060",
    NumCode: "051",
    CharCode: "AMD",
    Nominal: 100,
    Name: "Армянских драмов",
    Value: 19.572,
    Previous: 21.0442,
  },
  {
    ID: "R01090B",
    NumCode: "933",
    CharCode: "BYN",
    Nominal: 1,
    Name: "Белорусский рубль",
    Value: 30.0594,
    Previous: 31.6632,
  },
  {
    ID: "R01100",
    NumCode: "975",
    CharCode: "BGN",
    Nominal: 1,
    Name: "Болгарский лев",
    Value: 53.9371,
    Previous: 57.9138,
  },
  {
    ID: "R01115",
    NumCode: "986",
    CharCode: "BRL",
    Nominal: 1,
    Name: "Бразильский реал",
    Value: 19.8947,
    Previous: 21.0204,
  },
  {
    ID: "R01135",
    NumCode: "348",
    CharCode: "HUF",
    Nominal: 100,
    Name: "Венгерских форинтов",
    Value: 28.1692,
    Previous: 30.4308,
  },
  {
    ID: "R01200",
    NumCode: "344",
    CharCode: "HKD",
    Nominal: 1,
    Name: "Гонконгский доллар",
    Value: 12.2758,
    Previous: 13.1855,
  },
  {
    ID: "R01215",
    NumCode: "208",
    CharCode: "DKK",
    Nominal: 1,
    Name: "Датская крона",
    Value: 14.1767,
    Previous: 15.2255,
  },
  {
    ID: "R01235",
    NumCode: "840",
    CharCode: "USD",
    Nominal: 1,
    Name: "Доллар США",
    Value: 96.0458,
    Previous: 103.1618,
  },
  {
    ID: "R01239",
    NumCode: "978",
    CharCode: "EUR",
    Nominal: 1,
    Name: "Евро",
    Value: 105.4679,
    Previous: 113.2613,
  },
  {
    ID: "R01270",
    NumCode: "356",
    CharCode: "INR",
    Nominal: 10,
    Name: "Индийских рупий",
    Value: 12.576,
    Previous: 13.5199,
  },
  {
    ID: "R01335",
    NumCode: "398",
    CharCode: "KZT",
    Nominal: 100,
    Name: "Казахстанских тенге",
    Value: 19.4515,
    Previous: 20.3014,
  },
  {
    ID: "R01350",
    NumCode: "124",
    CharCode: "CAD",
    Nominal: 1,
    Name: "Канадский доллар",
    Value: 76.4452,
    Previous: 81.933,
  },
  {
    ID: "R01370",
    NumCode: "417",
    CharCode: "KGS",
    Nominal: 100,
    Name: "Киргизских сомов",
    Value: 97.1747,
    Previous: 10.1916,
  },
  {
    ID: "R01375",
    NumCode: "156",
    CharCode: "CNY",
    Nominal: 1,
    Name: "Китайский юань",
    Value: 15.0771,
    Previous: 16.1891,
  },
  {
    ID: "R01500",
    NumCode: "498",
    CharCode: "MDL",
    Nominal: 10,
    Name: "Молдавских леев",
    Value: 52.2815,
    Previous: 56.0814,
  },
  {
    ID: "R01535",
    NumCode: "578",
    CharCode: "NOK",
    Nominal: 1,
    Name: "Норвежская крона",
    Value: 11.1117,
    Previous: 11.7561,
  },
  {
    ID: "R01565",
    NumCode: "985",
    CharCode: "PLN",
    Nominal: 1,
    Name: "Польский злотый",
    Value: 22.2782,
    Previous: 24.0515,
  },
  {
    ID: "R01585F",
    NumCode: "946",
    CharCode: "RON",
    Nominal: 1,
    Name: "Румынский лей",
    Value: 21.3123,
    Previous: 22.8913,
  },
  {
    ID: "R01625",
    NumCode: "702",
    CharCode: "SGD",
    Nominal: 1,
    Name: "Сингапурский доллар",
    Value: 70.7207,
    Previous: 75.9604,
  },
  {
    ID: "R01670",
    NumCode: "972",
    CharCode: "TJS",
    Nominal: 10,
    Name: "Таджикских сомони",
    Value: 79.3537,
    Previous: 85.233,
  },
  {
    ID: "R01700J",
    NumCode: "949",
    CharCode: "TRY",
    Nominal: 10,
    Name: "Турецких лир",
    Value: 64.7257,
    Previous: 69.4912,
  },
  {
    ID: "R01710A",
    NumCode: "934",
    CharCode: "TMT",
    Nominal: 1,
    Name: "Новый туркменский манат",
    Value: 27.4417,
    Previous: 29.4748,
  },
  {
    ID: "R01717",
    NumCode: "860",
    CharCode: "UZS",
    Nominal: 10000,
    Name: "Узбекских сумов",
    Value: 83.391,
    Previous: 89.4243,
  },
  {
    ID: "R01720",
    NumCode: "980",
    CharCode: "UAH",
    Nominal: 10,
    Name: "Украинских гривен",
    Value: 32.6684,
    Previous: 34.857,
  },
  {
    ID: "R01760",
    NumCode: "203",
    CharCode: "CZK",
    Nominal: 10,
    Name: "Чешских крон",
    Value: 42.7024,
    Previous: 45.9969,
  },
  {
    ID: "R01770",
    NumCode: "752",
    CharCode: "SEK",
    Nominal: 1,
    Name: "Шведская крона",
    Value: 10.1959,
    Previous: 10.8917,
  },
  {
    ID: "R01775",
    NumCode: "756",
    CharCode: "CHF",
    Nominal: 1,
    Name: "Швейцарский франк",
    Value: 103.153,
    Previous: 110.3335,
  },
  {
    ID: "R01810",
    NumCode: "710",
    CharCode: "ZAR",
    Nominal: 10,
    Name: "Южноафриканских рэндов",
    Value: 65.6015,
    Previous: 69.7002,
  },
  {
    ID: "R01815",
    NumCode: "410",
    CharCode: "KRW",
    Nominal: 1000,
    Name: "Вон Республики Корея",
    Value: 78.8068,
    Previous: 84.9838,
  },
  {
    ID: "R01820",
    NumCode: "392",
    CharCode: "JPY",
    Nominal: 100,
    Name: "Японских иен",
    Value: 78.8068,
    Previous: 85.4731,
  },
];

const Calc = ({ title, listCurrenciesPositionLeft, allCurrencies, mainCurrencies }) => {
  
  return (
    <div className="calc">
      <div className="calc__title">{title}</div>
      <CalcCurrencies
        mainCurrencies={obj}
        allCurrencies={allCurrencies}
        listCurrenciesPositionLeft={listCurrenciesPositionLeft}
      />
      <div className="calc__input_box">
        <input type="number" className="calc__input_box__input"/>
        <div className="calc__input_box_rate">1 RUR = 1 RUR</div>
      </div>
    </div>
  );
};

Calc.defaultProps = {
  allCurrencies: [],
  mainCurrencies: [],
  listCurrenciesPositionLeft: false,
}

export default Calc;
