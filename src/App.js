import React from 'react'
import Home from './component/Home'
import Rental from './component/Rental'
import Layout from './component/Layout'
import Description from './component/Description'
import Form from './component/Form'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Layout/>}/>
      <Route index element ={<Home/>}/>
      <Route path ="rentals" element ={<Rental/>}/>
      <Route path ="description" element={<Description/>}/>
      <Route path ="form" element = {<Form/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App