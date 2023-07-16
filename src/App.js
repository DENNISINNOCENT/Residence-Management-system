import React from 'react'
import Home from './component/Home'
import Rental from './component/Rental'
import Layout from './component/Layout'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Layout/>}/>
      <Route index element ={<Home/>}/>
      <Route path ="rentals" element ={<Rental/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App