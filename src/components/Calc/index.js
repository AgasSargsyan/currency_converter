import React from 'react'
import CalcCurrencies from "../CalcCurrencies";

const obj = [
  {
    CharCode: 'qqq',
    Name: 'aa'
  },
  {
    CharCode: 'qqq',
    Name: 'aa'
  },
]

const Calc = ({title}) => {
  return (
    <div className='calc'>
        <div className="calc__title">{title}</div>
        <div className="calc__currencies">
          <CalcCurrencies mainCurrencies={obj}/>          
        </div>
    </div>
  )
}

export default Calc
