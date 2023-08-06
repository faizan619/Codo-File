import React from 'react'
import blob from '../../assets/blobanimation.svg'

function Feedback() {
  return (
    <> 
        <div className='container'>
        <img src={blob} alt="" className='blob_a blob3' />
    
            <h1 className='title'>Let's Work Together</h1>
            <div className='feedSection'>
                <div className='feedinfo'>
                    <p className="info">For Being <mark>Amazing</mark>.Let's Become a part of a amazing community <mark>Codo File</mark>.</p>
                </div>
                <div className='feedform'>
                    <form>
                        <div className="formname formDetails">
                            <label htmlFor='name'>Name :</label>
                            <input type="text" name="name" id="name"  />
                        </div>
                        <div className="formemail formDetails"> 
                            <label>Email :</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="formmessage formDetails">
                            <label>Message :</label>
                            <textarea name="feedback" id="feedback" />
                        </div>
                        <div className="formbutton formDetails">
                            <button className="btn formbtn">Say a Word?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Feedback
// Copyright © 2022 | Made by Rawnge