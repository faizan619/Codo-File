import React, { useContext } from 'react'
import headerImg from '../assets/favi-removebg-preview.png'
import {NavLink} from 'react-router-dom';

import {UsedContext} from './App'

function Header() {

  const { state, dispatch } = useContext(UsedContext);

  const RenderMenu = ()=>{
    if(state){
      return (
        <>
          {/* <NavLink to='/login'><button className='Headerbtn Headerbtn1 btn'>Login</button></NavLink>
            <NavLink to='/register'><button className='Headerbtn Headerbtn2 btn'>Register</button></NavLink> */}
            <NavLink to='/logout'><button className='Headerbtn Headerbtn2 btn'>Logout</button></NavLink>
        </>
      )
    }
    else{
      return(
        <>
          
          <NavLink to='/login'><button className='Headerbtn Headerbtn1 btn'>Login</button></NavLink>
            <NavLink to='/register'><button className='Headerbtn Headerbtn2 btn'>Register</button></NavLink>
            {/* <NavLink to='/logout'><button className='Headerbtn Headerbtn2 btn'>Logout</button></NavLink> */}
        </>
      )
    }
  }

  return (
    <div className="headerContainer">
        <div className="headerImage">
            <img className='headerlogo' src={headerImg} alt="MainLogo" /><NavLink className='headerp' to='/'>Codo File</NavLink>
        </div>
        <div className="Headerbtngroup">
            {/* <NavLink to='/login'><button className='Headerbtn Headerbtn1 btn'>Login</button></NavLink>
            <NavLink to='/register'><button className='Headerbtn Headerbtn2 btn'>Register</button></NavLink>
            <NavLink to='/logout'><button className='Headerbtn Headerbtn2 btn'>Logout</button></NavLink> */}
            <RenderMenu/>
        </div> 
    </div>
  )
}

export default Header