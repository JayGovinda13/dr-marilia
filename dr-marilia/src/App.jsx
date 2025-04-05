import { useState } from 'react'
import './App.css'
import { Button1, Button2, Button3, Button4 } from './Components/Buttons/Buttons'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Button1/>
      <Button2/>
      <Button3/>
      <Button4/>
    </>
  )
}

export default App
