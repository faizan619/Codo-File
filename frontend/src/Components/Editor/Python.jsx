import React,{ useState } from 'react';
import LangList from './LangList';
import axios from 'axios';
import copy_icon from '../../assets/copy_icon.gif';
import download_icon from '../../assets/download_logo.png';
import { toast } from 'react-hot-toast';


function Python() {

  

  const [code,setCode] = useState('');
  const [output,setOutput] = useState('');

  const handleSubmit = async ()=>{
    toast.loading('Please Wait while File is Execuing');
    const payload = {
      language:"py",
      code
    };

    try{

      const {data} = await axios.post("http://localhost:5000/runpy",payload)
      setOutput(data.output);
      console.log("Faizan Alam",data);
      toast.remove();
      toast.remove();
      toast.success("Executed Successfully.");
      // setCode("");
    }catch(err){
      toast.remove();
      toast.error("Please Enter Valid Python Code");
      console.log(`error is in python.js .The error : ${err}`);
    }
  }

  const clear = ()=>{
    toast.success('Output Cleared')
    const box = document.querySelector("#consoleOutput p");
    box.innerText = "";
  }

  const copyContent = ()=>{
    toast.success("Copied")
    navigator.clipboard.writeText(code);
  }

  const codeToFile = ()=>{
    toast.success('File is Downloading...')
    const text = document.querySelector('#python').value;
    
    const blob = new Blob([text],{type:"text/python"});

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "codofile-python.py";
    link.click();
  }


  return (
    <> 
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="PlaygroundMain">
                <div className='runHeaderJS'>
                    <div className='jsleftheaderfile jsfile'>
                      <mark><h2>index.py</h2></mark>
                      <div className='runbtn'>
                      <button className='vbtn'>
                      <img className='voicebtn' onClick={copyContent} src={copy_icon} alt='copy'/>
                      </button>
                      <button className='vbtn'>
                      <img className='voicebtn' onClick={codeToFile} src={download_icon} alt='download'/>
                      </button>
                        <button className='btn' onClick={handleSubmit}>RUN</button>
                      </div>
                    </div>
                    <div className='jsrightheaderfile jsfile'>
                      <mark><p>OUTPUT</p></mark>
                      <button className='clear' onClick={clear}>Clear</button>
                    </div>
                  </div>
                  <div className='jsplayground playground'>
                    <div className='leftplayground snippet'>
                    <textarea className='dartpython' name="python" id="python" value={code} onChange={(e)=>setCode(e.target.value)} placeholder='print("hello codoPlayers")'></textarea>
                    </div>
                    <div className='rightplayground snippet' id='consoleOutput' >
                    <p>{output}</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Python