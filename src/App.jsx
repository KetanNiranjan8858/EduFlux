import { useState } from 'react'
import Header from './section/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default App
