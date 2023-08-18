import React, { useState } from 'react'
import blob from '../../assets/blobanimation.svg'
import { toast } from 'react-hot-toast';

function Feedback() {

    const [userData,setUserData] = useState({
        name: '',
        email:'',
        feedback:'',
    });

    let name,value;
    const postUserData = (event)=>{
        name = event.target.name;
        value= event.target.value;

        setUserData({...userData,[name]:value});
    }

    //connect with firebase
    const submitData = async(e)=>{
        // toast.loading('Data Processing...')
        e.preventDefault();
        const {name,email,feedback} = userData;
        if(name && email && feedback){

        
        const res = fetch(
            'https://reactformwebsite-79b28-default-rtdb.firebaseio.com/codoFileFeedback.json',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    feedback,
                }),
            }
        );
        
            if(res){
                toast.remove();
                alert("Data Stored Successfully");
                setUserData({name:"",email:"",feedback:"",})
            }
            else{
                // alert("Please Fill the Data");
                // toast.remove();
                toast.error("Please Fill the Form")
            }
        }
        else{
            toast.error("Please Fill the Form")
            // alert("Please Fill the data")
        }
    };


  return (
    <> 
        <div className='container'>
        <img src={blob} alt="" className='blob_a blob3' />
    
            <h1 className='title'>Let's Work Together</h1>
            <div className='feedSection'>
                <div className='feedinfo'>
                    <p className="info">For Being <mark>Amazing</mark>.Let's Become a part of a amazing community <mark>Codo File</mark>.You can even Tell your's <mark>Issue Related to Website for Improving the Site</mark></p>
                </div>
                <div className='feedform'>
                    <form>
                        <div className="formname formDetails">
                            <label htmlFor='name'>Name :</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name"  
                            value={userData.name}
                            onChange={postUserData}
                              />
                        </div>
                        <div className="formemail formDetails"> 
                            <label>Email :</label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={userData.email}
                            onChange={postUserData}
                              />
                        </div>
                        <div className="formmessage formDetails">
                            <label>Message :</label>
                            <textarea name="feedback" id="feedback"  
                            value={userData.feedback}
                            onChange={postUserData}
                             />
                        </div>
                        <div className="formbutton formDetails">
                            <button type='submit' onClick={submitData} className="btn formbtn">Say a Word?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Feedback