import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Login_svg from '../../assets/Back-to-work-pana.png';
import blog_svg from '../../assets/blobanimation.svg';
import { toast } from 'react-hot-toast';
// import { useFormik } from 'formik';
// import { registerSchema } from './schema';


// const LoginValues = {
//   username:"",
//   pass:"",
// }

import {UsedContext} from '../App'

function Login() {

  const {state,dispatch} = useContext(UsedContext);


  const history2 = useNavigate();

  const width2 = window.outerWidth;

  const [username,setUsername] = useState('');
  const [password,setpassword] = useState('');

  // http://localhost:3000/login
  const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,
          password
        })
    })

    const data = res.json();
 
    if(res.status === 400 || !data){
      // window.alert("Invalid Credentials-Check you username and password");
      toast.error('Please Enter Valid Inputs');
    }
    else if(res.status === 401){
      toast.error("First Register Yourself");
    }
    else if(res.status === 402 ){
      toast.error("Wrong Password.");
    }
    else if(res.status === 403){
      toast.error("Please Fill The Details");
    }
    else{
      dispatch({type:'USER',payload:true});
      // window.alert("Login Successfully");
      toast.success("Login Successfully");
      history2('/');
    }
  }

//   const {values,errors,handleBlur,touched,handleChange,handleSubmit} =  useFormik({
//     initialValues:LoginValues,
//     validationSchema:registerSchema,
//     onSubmit:(values,action)=>{
//         console.log(
//             " ~ File: Register.jsx ~ line 14 ~ Register ~ values ",
//             values
//         );
//         action.resetForm();
//     },
// });

//   const {errors,handleBlur,touched,handleSubmit} =  useFormik({
//     initialValues:[username,password],
//     validationSchema:registerSchema,
//     onSubmit:(action)=>{
//         action.resetForm();
//     },
// });

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
          {/* <form className='LoginForm' onSubmit={handleSubmit}> */}
          <form className='LoginForm' method='POST'>
            <div className="Loginname">
              <label htmlFor=""> Username:</label><br />
              <input type="text" name="username" id="username" autoComplete='off'
               placeholder='codofile' 
               value={username}
               onChange={(e)=>setUsername(e.target.value)}
              //  value={values.username} 
              //  onChange={handleChange} 
              //  onBlur={handleBlur}

               /><br />
              {/* {errors.username && touched.username ? (<p className='errorlabelinput'>{errors.username}</p>) : null} */}

            </div>
            <div className="Loginname">
              <label htmlFor=""> Password:</label><br />
              <input type="password" name="pass" id="pass" autoComplete='off'
               placeholder='codofile' 
               value={password}
               onChange={(e)=>setpassword(e.target.value)}

              //  value={values.pass} 
              //  onChange={handleChange} 
              //  onBlur={handleBlur}
                /><br />
              {/* {errors.pass && touched.pass ? (<p className='errorlabelinput'>{errors.pass}</p>) : null} */}

            </div> 
            <input type="submit" name="submit" id="submit" className='btn' onClick={loginUser} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login