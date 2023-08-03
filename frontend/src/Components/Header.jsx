import React from 'react'
import headerImg from '../assets/favi-removebg-preview.png'
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className="headerContainer">
        <div className="headerImage">
            <img className='headerlogo' src={headerImg} alt="MainLogo" /><p>Codo File</p>
        </div>
        <div className="Headerbtngroup">
            <NavLink to='/login'><button className='Headerbtn Headerbtn1 btn'>Login</button></NavLink>
            <NavLink to='/'><button className='Headerbtn Headerbtn2 btn'>Register</button></NavLink>
        </div> 
    </div>
  )
}

export default Header