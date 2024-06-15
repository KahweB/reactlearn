import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let isimler = [
    "bora",
    "ahmet",
    "dilek"
  ]
  let vizeInc1 = 25;
  let vizeInc2 = 20;
  let myStyle = {
    color: "black",
    backgroundColor: "white"
  }
  function vizeHesap(vize1, vize2) {
    let finalNote = (vize1 + vize2) / 2
    if (finalNote < 50) {
      return [false, finalNote]
    }
    else {
      return [true, finalNote]
    }
  }

  let final = vizeHesap(vizeInc1, vizeInc2);
  return (

    <div>
      {final[0] ? <p>gectin notun {final[1]}</p> : <p>kaldin notun {final[1]}</p>}
      {isimler.map((isim, index) => (<div key={index}
        style={myStyle}>{isim}: {index}</div>))}
    </div >


  );
}

export default App
