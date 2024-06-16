import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [firstName, setFirstName] = useState("BORA");
  const [lastName, setLastName] = useState("BAS");

  useEffect(() => {
    console.log("her zaman calisir");
  })
  useEffect(() => {
    console.log("ilk render edildiginde calisir");
  }, [])
  useEffect(() => {
    console.log("ilk render edildiginde ve FIRSTNAME veya LASTNAME state degeri degistiginde calisir");
  }, [firstName, lastName])

  return (
    <div>
      <div>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
      <br />
      <button onClick={() => { setFirstName("dasfdasfaD") }}>adi degistir</button>
      <button onClick={() => { setLastName("dasfkjdsfkskjlfkakf") }}>soyadi degistir</button>
    </div>
  )
}

export default App
