import React from 'react'
import { NavLink } from 'react-router-dom'
import Login_svg from '../../assets/Back-to-work-pana.png';
import blog_svg from '../../assets/blobanimation.svg';


function Login() {
  const width2 = window.outerWidth;

  return (
    <> 
    <div className="smallScreen">
      <mark>The Screen is Visible with width more than 250px <br/><br/><hr/><br/>Screen Size: {width2}px</mark>
    </div>
      <div className="loginContainer">
        <img className='blob_svg blob_a' src={blog_svg} alt="backgound-svg" />
        <img className='blob_svg2 blob_a' src={blog_svg} alt="backgound-svg" />
        <div className="registerSVG loginimage">
                    <img src={Login_svg} alt="" />
                    <p>Don't have an Account? <NavLink to="/register"><span className='registerSwitch'>Create Account</span></NavLink></p>
        </div>
        <div className="loginDetails">
          <h1 className='title logintitle'>Login</h1>
          <form className='LoginForm'>
            <div className="Loginname">
              <label htmlFor=""> Username:</label><br />
              <input type="text" name="name" id="name" autoComplete='off' placeholder='codofile' /><br />
            </div>
            <div className="Loginname">
              <label htmlFor=""> Password:</label><br />
              <input type="password" name="name" id="name" autoComplete='off' placeholder='codofile' /><br />
            </div> 
            <NavLink to="/"><button className='btn' onClick={() => console.log('clicked')}>Log In</button></NavLink>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login