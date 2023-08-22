import React, { useState } from 'react'
import LangList from './LangList'
import Tesseract from 'tesseract.js';
import { toast } from "react-hot-toast"
import copy_icon from '../../assets/copy_icon.gif'

function Image2Text() {

  const [isLoading,setIsLoading] = useState(false);

  const [imagePath,setImagePath] = useState("/mainLogo.png");
  const [text,setText] = useState("");

  const handleChange = (event) => {
    toast.success('File Added.');
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }

  const handleClick = () => {
    toast.loading("Coverting into Text...")
    setIsLoading(true);
    Tesseract.recognize(
      imagePath,'eng',
      { 
        logger: m => console.log(m) 
      }
    )
    .catch (err => {
      console.error(err);
      toast.remove();
      toast.error("Please Check Internet Connection");
    })
    .then(result => {
      // Get Confidence score
      let confidence = result.data.confidence
     
      let text = result.data.text
      setText(text);
      console.log(confidence,text);
      toast.remove();
      toast.success("Image Converted");
      setIsLoading(false)
    })
  }

  const copyContent = ()=>{
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard")
  }
 
  const clear = ()=>{
    toast.success("Output Cleared")
    const box = document.querySelector("#vtext");
    box.value = "";
  }


  return (
    <>
      <div className="voiceContainer">
            <div className="voiceBody wholeeditorBody">
                <div className="leftLang">
                    <LangList leftcolori="white"/>
                </div>
                <div className="voicePlayground">
                <mark><h1>Image to Text Converter</h1></mark><br/>
                  <main className='imageMain'>
                    <img src={imagePath} className='Image-Logo' alt="logo" />
                    <input className='imagefiletype' type="file" onChange={handleChange} />
                    {/* <button onClick={handleClick} className='btn'>Convert To Text</button> */}
                    <div className="imagebutton">
                    <button className='btn btnbtn' onClick={copyContent}>Copy</button> 
                    <input type="submit" className='btn imgbtn' onClick={handleClick} value={isLoading? "Loading...":"Convert To Text"} />
                    <button className='btn btnbtn' onClick={clear}>Clear</button>
                    </div>
                    
                    <div className="image-text-box">
                      {/* <p contentEditable>{text}</p> */}
                      <textarea name="vtext" id="vtext" placeholder='Your Text Here' value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
                    </div>
                  </main>
                </div>
            </div>
        </div>
    </>
  )
}

export default Image2Text