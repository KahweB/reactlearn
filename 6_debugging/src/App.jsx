import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const calculate = () => {
    debugger
    setDegree((vizeOne + vizeTwo) / 2)
  }
  const [vizeOne, setVizeOne] = useState();
  const [vizeTwo, setVizeTwo] = useState();
  const [degree, setDegree] = useState()

  return (
    <>
      <div>
        <div>
          <input type="number" value={vizeOne} onChange={(e) => { setVizeOne(Number(e.target.value)) }} />
        </div>
        <div>
          <input type="number" value={vizeTwo} onChange={(e) => { setVizeTwo(Number(e.target.value)) }} />
        </div>
        <div>
          <button onClick={calculate}>ortalama bul</button>
        </div>
        <div>
          <div>{degree}</div>
        </div>
      </div>
    </>
  )
}

export default App
