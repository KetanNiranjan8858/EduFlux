import { useState } from 'react'
import Header from './section/Header.jsx'
import Hero from './section/Hero.jsx'
import Footer from './section/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default App
