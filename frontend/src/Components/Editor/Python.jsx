import React,{ useState } from 'react';
import LangList from './LangList'
import voice from '../../assets/image.png' 
import CodeMirror from '@uiw/react-codemirror';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { python } from '@codemirror/lang-python';
import axios from 'axios';


function Python() {

  const [code,setCode] = useState('');
  const [output,setOutput] = useState('');

  const handleSubmit = async ()=>{
    const payload = {
      language:"py",
      code
    };

    try{
      const {data} = await axios.post("http://localhost:5000/runpy",payload)
      setOutput(data.output);
      console.log("Faizan Alam",data);
      // setCode("");
    }catch(err){
      console.log(`error is in python.js .The error : ${err}`);
    }
  }

  const clear = ()=>{
    const box = document.querySelector("#consoleOutput");
    box.innerHTML = "";
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
                      {/* <button className='vbtn'>
                      <img className='voicebtn' src={voice} alt='voice'/>
                      </button> */}
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
                    <textarea className='dartpython' name="python" id="python" value={code} onChange={(e)=>setCode(e.target.value)}></textarea>
                    {/* <CodeMirror
                        value={code}
                        height='80vh'
                        theme={darcula}
                        extensions={[python()]}
                        // onChange={(e) =>{
                        //   setCode(e.target.value);
                        // }}
                        // onBeforeChange={(editor,data,value)=>{
                        //   setCode(value);
                        // }}
                        onBeforeChange={(value)=>{
                          setCode(value)
                        }}
                      /> */}
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