import { useState } from 'react'
import './App.css'
import Body2 from './Components/Body2/Body2'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Body2 />
    </>
  )
}

export default App
