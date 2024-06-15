import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("bora");
  const [names, setNames] = useState(["bora", "dasfdsa", "daskf"]);
  const [userInfo, setUserInfo] = useState({ username: "boradenizbas", password: "1234" })
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }

  }
  return (
    <div>
      <div>{userInfo.username}</div>
      <div>{userInfo.password}</div>
      <div>{firstName}</div>
      <button onClick={() => { setFirstName("yabahsd") }}>ad degistir</button>
      <div>{count}</div>
      <button onClick={increment}>arttir</button>
      <button onClick={decrement}>azalt</button>
    </div>
  )
}

export default App
