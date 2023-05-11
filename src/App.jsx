
import {Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from "./Componants/Navbar"
import Footer from "./Componants/Footer"
import Home from "./pages/Home"
import { useState } from "react"
import Cart from "./pages/Cart"


function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />}></Route>
          <Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}></Route>        
        </Routes>
      <Footer />
    </div>
  )
}

export default App
