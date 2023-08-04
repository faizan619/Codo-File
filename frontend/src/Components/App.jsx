import React from 'react'
import Register from './Screens/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Screens/Login';
import Voice2Text from './Editor/Voice2Text';
import Image2Text from './Editor/Image2Text';
import Python from './Editor/Python';
import Html from './Editor/Html';
import Java from './Editor/Java';
import JavaScript from './Editor/Javascript';
import Errorpage from './Screens/Errorpage';
import Homepage from './Screens/Homepage';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Homepage/>}/>      
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>      
      <Route path='/editor/python' element={<Python/>}/>
      <Route path='/editor/javascript' element={<JavaScript/>}/>
      <Route path='/editor/html' element={<Html/>}/>
      <Route path='/editor/css' element={<Html/>}/>
      <Route path='/editor/java' element={<Java/>}/>
      <Route path='/editor/voice2text' element={<Voice2Text/>}/>
      <Route path='/editor/image2text' element={<Image2Text/>}/>
      <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App