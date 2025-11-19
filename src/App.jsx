import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './section/Header.jsx'
import Hero from './section/Hero.jsx'
import Footer from './section/Footer.jsx'
import Feature from './section/Feature.jsx'
import Reward from './section/Reward.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Feature />
            <Reward />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
