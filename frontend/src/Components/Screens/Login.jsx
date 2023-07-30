import React from 'react'
import { NavLink } from 'react-router-dom'
import Login_svg from '../../assets/Back-to-work-pana.png';
import blog_svg from '../../assets/blobanimation.svg';


function Login() {
  return (
    <>
      <img className='blob_svg blob_a' src={blog_svg} alt="backgound-svg" />
      <img className='blob_svg2 blob_a' src={blog_svg} alt="backgound-svg" />
      <div className="loginContainer">
      <div className="registerSVG loginimage">
                    <img src={Login_svg} alt="" />
                    <p>Don't have an Account? <NavLink to="/"><span className='registerSwitch'>Create Account</span></NavLink></p>
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
            <button className='btn' onClick={() => console.log('clicked')}>Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login