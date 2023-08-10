import React from 'react'
import Login_svg from '../../assets/Login-amico.svg';
import blog_svg from '../../assets/blobanimation.svg';
import { NavLink } from 'react-router-dom';


function Register() { 
     const width2 = window.outerWidth;
  return (
    <>
    <div className="smallScreen">
      <mark>The Screen is Visible with width more than 250px <br/><br/><hr/><br/>Screen Size: {width2}px</mark>
    </div>
        <div className="registerMainComponent">
        <img className='blob_svg blob_a' src={blog_svg} alt="backgound-svg" />  
            <img className='blob_svg2 blob_a' src={blog_svg} alt="backgound-svg" />
            <h1 className='registerTitle title'>Registration</h1><br/>
            <div className="registerSection">
                <div className="registerForm">
                    <form>
                        <div className="RegisterInputField">
                            <div className="Registername">
                                <label className='registerLabels' htmlFor="username"> Username:</label><br />
                                <input type="text" name="username" id="username" autoComplete='off' placeholder='codofile' /><br />
                            </div>
                            <div className="Registeremail">
                                <label className='registerLabels' htmlFor="email">Email:</label><br />
                                <input type="text" name="email" id="email" autoComplete='off' placeholder='CodoFile@gmail.com' /><br />
                            </div>
                            <div className="Registerpassword">
                                <label className='registerLabels' htmlFor="pass">Password:</label><br />
                                <input type="password" name="pass" id="pass" autoComplete='off' placeholder='123456' /><br />
                            </div>
                            <div className="Registercpassword">
                                <label className='registerLabels' htmlFor="cpass">Confirm Password:</label><br />
                                <input type="password" name="cpass" id="cpass" autoComplete='off' placeholder='123456' /><br />
                            </div>
                            <div className="Registerdomain">
                                <label className='registerLabels' htmlFor="work">Profession:</label>
                                <input type="text" name="work" id="work" autoComplete='off' placeholder='Web Developer' />
                            </div>
                            <div className="Registerdomain">
                                <label className='registerLabels' htmlFor="dom">You are a :</label><br />
                                <input type="text" name="dom" id="dom" placeholder='Student/Teacher/Learner' />
                            </div>
                        </div>
                        <NavLink to="/login"><button className="btn registerbtn">Register</button></NavLink>
                    </form>
                </div>
                <div className="registerSVG">
                    <img src={Login_svg} alt="" />
                    <p>Already have an Account?  <NavLink to="/login"><span className="registerSwitch">Login Now</span></NavLink></p>
                    {/* <p>Already have an Account?  <NavLink to="/voice2text"><span className="registerSwitch">Login Now</span></NavLink></p> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Register