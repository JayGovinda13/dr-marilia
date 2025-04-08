import { useState } from 'react'
import './App.css'
import Body2 from './Components/Body2/Body2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body2 />
    </>
  )
}

export default App
