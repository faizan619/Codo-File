import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {UsedContext} from '../App'


function Logout() {

    const {state,dispatch} = useContext(UsedContext);

    const history3 = useNavigate()

    useEffect(()=>{
        fetch('http://localhost:5000/logout',{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
            },
            credentials:"include"
        }).then((res)=>{
            dispatch({type:'USER',payload:false});
            history3("/login")
            if(!res.status === 200){
                const error = new Error(res.Error)
                throw error;
            }
        }).catch((err)=>{
            console.log("error in logout", err)
            dispatch({type:'USER',payload:false});
            history3("/login")
        })
    })

  return (
    <mark><h1>Logout</h1></mark>
  )
}

export default Logout