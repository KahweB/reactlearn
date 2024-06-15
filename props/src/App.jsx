import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './product'
import Container from './Container'

function App() {
  const productName = "bot"
  const price = 4200


  return (
    <div>
      <Product productName="ayakkabi" price={3200} />
      <Product productName="terlik" price={125} />
      <Product productName={productName} price={price} />

      <Container>
        <Product productName={productName} price={price} />
      </Container>

    </div>

  )
}

export default App
