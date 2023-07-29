import React from 'react'
import Register from './Screens/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Screens/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App