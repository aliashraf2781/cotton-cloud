import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Product from './Components/Product/index';
import Footer from './Components/Footer/Index';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Product/> */}
    <Footer/>
    </>
  )
}

export default App
