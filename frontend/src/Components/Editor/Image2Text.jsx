import React, { useState } from 'react'
import LangList from './LangList'
import Tesseract from 'tesseract.js';

function Image2Text() {

  const [imagePath,setImagePath] = useState("/mainLogo.png");
  const [text,setText] = useState("");

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }

  const handleClick = () => {
  
    Tesseract.recognize(
      imagePath,'eng',
      { 
        logger: m => console.log(m) 
      }
    )
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      // Get Confidence score
      let confidence = result.data.confidence
     
      let text = result.data.text
      setText(text);
      console.log(confidence,text);
  
    })
  }

  return (
    <>
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="voicePlayground">
                <mark><h1>Image to Text Converter</h1></mark><br />
                  <main className='imageMain'>
                    <img src={imagePath} className='Image-Logo' alt="logo" />
                    <input className='imagefiletype' type="file" onChange={handleChange} />
                    <button onClick={handleClick} className='btn'>Convert To Text</button>
                    
                    <div className="image-text-box">
                      <p contentEditable>{text}</p>
                    </div>
                  </main>
                </div>
            </div>
        </div>
    </>
  )
}

export default Image2Text