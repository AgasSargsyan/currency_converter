import { useState } from "react";
import {Main} from './components'
 



function App() {
  const [state, setState] = useState('')

  const getValue = async function() {
    const fff = await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    const data = await new Promise((res) => res(fff.json()))
    console.log(Object.keys(data.Valute).length);
      setState(data.Valute.length)
  }

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
