import React from 'react'
import ChangeCalc from '../ChangeCalc'
import Calc from '../Calc'

const Main = () => {
  return (
    <div className='main'>
        <Calc/>
        <ChangeCalc/>
        <Calc/>
    </div>
  )
}

export default Main
