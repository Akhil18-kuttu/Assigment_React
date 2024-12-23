import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import ProductForm from './Components/ProductForm'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <br /><br />
      
      <Routes>
        <Route path='/Productpage' element={<ProductForm />}/>
       <Route path='/' element={<Home />}/>
             </Routes>
      
      
    </>
  )
}

export default App
