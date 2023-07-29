import React from 'react'
import Login_svg from '../../assets/Login-amico.svg';
import blog_svg from '../../assets/blobanimation.svg';
import { NavLink } from 'react-router-dom';


function Register() {
  return (
    <>
        <img className='blob_svg blob_a' src={blog_svg} alt="backgound-svg" />  
        <div className="registerMainComponent">
            <img className='blob_svg2 blob_a' src={blog_svg} alt="backgound-svg" />
            <h1 className='registerTitle title'>Registration</h1><br/>
            <div className="registerSection">
                <div className="registerForm">
                    <form>
                        <div className="RegisterInputField">
                            <div className="Registername">
                                <label htmlFor=""> Username:</label><br />
                                <input type="text" name="name" id="name" autoComplete='off' placeholder='codofile' /><br />
                            </div>
                            <div className="Registeremail">
                                <label htmlFor="">Email:</label><br />
                                <input type="text" name="name" id="name" autoComplete='off' placeholder='CodoFile@gmail.com' /><br />
                            </div>
                            <div className="Registerpassword">
                                <label htmlFor="">Password:</label><br />
                                <input type="password" name="name" id="name" autoComplete='off' placeholder='123456' /><br />
                            </div>
                            <div className="Registercpassword">
                                <label htmlFor="">Confirm Password:</label><br />
                                <input type="password" name="name" id="name" autoComplete='off' placeholder='123456' /><br />
                            </div>
                            <div className="Registerdomain">
                                <label htmlFor="">Select You Domain :</label><br />
                                <select name="domain" id="domain">.
                                <option value="domain">Select</option>
                                <option value="domain">Web Developer</option>
                                <option value="domain">Python Developer</option>
                                <option value="domain">Java Developer</option>
                                <option value="domain">Fresher Developer</option>
                                </select>
                            </div>
                            <div className="Registerdomain">
                                <label htmlFor="">You are a :</label><br />
                                <select name="category" id="category">.
                                    <option value="category">Select</option>
                                    <option value="category">Student</option>
                                    <option value="category">Teacher</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn registerbtn">Register</button>
                    </form>
                </div>
                <div className="registerSVG">
                    <img src={Login_svg} alt="" />
                    <p>Already have an Account? <span className="registerSwitch"> <NavLink to="/login">Login Now</NavLink></span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register