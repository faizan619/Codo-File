import React from 'react'
import Register from './Screens/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Screens/Login';
import Voice2Text from './Screens/Features/Voice2Text';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/voice2text' element={<Voice2Text/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App