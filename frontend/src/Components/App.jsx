import React, { createContext, useReducer } from 'react'
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
import Logout from './Screens/Logout';
import { Toaster } from 'react-hot-toast';

import { initialState, reducer } from '../reducer/UseReducer';


export const UsedContext = createContext();
function App() {


  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <UsedContext.Provider value={{state,dispatch}}>
    <div>
        <Toaster
          position='top-center'
          toastOptions={{
            success:{
              theme:{
                primary:'#4aed88'
              }
            }
          }}
        />
      </div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>      
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>}/>      
          <Route path='/logout' element={<Logout/>}/>      
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
    </UsedContext.Provider>
  )
}

export default App