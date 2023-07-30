import React from 'react'
import Register from './Screens/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Screens/Login';
import Voice2Text from './Screens/Features/Voice2Text';
import Image2Text from "./Screens/Features/Image2Text";
import Python from './Screens/Languages/Python'
import Html from './Screens/Languages/Html'
import Java from './Screens/Languages/Java'
import JavaScript from './Screens/Languages/Javascript'



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/voice2text' element={<Voice2Text/>}/>
      <Route path='/image2text' element={<Image2Text/>}/>
      <Route path='/editor/python' element={<Python/>}/>
      <Route path='/editor/javascript' element={<JavaScript/>}/>
      <Route path='/editor/html' element={<Html/>}/>
      <Route path='/editor/css' element={<Html/>}/>
      <Route path='/editor/java' element={<Java/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App