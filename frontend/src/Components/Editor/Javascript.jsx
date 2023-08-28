import React, { useEffect, useState } from 'react';
import LangList from '../Editor/LangList';
import copy_icon from '../../assets/copy_icon.gif';
import download_icon from '../../assets/download_logo.png';
import { toast } from 'react-hot-toast';

const data = new Date()
let DayName;
if(data.getDay() === 1){
  DayName =  "Monday";
}
else if(data.getDay() === 2){
  DayName =  "Tuesday"; 
}
else if(data.getDay() === 3){
  DayName =  "Wednesday";
}
else if(data.getDay() === 4){
  DayName =  "Thursday";
}
else if(data.getDay() === 5){
  DayName =  "Friday";
}

else if(data.getDay() === 6){
  DayName =  "Saturday";
}
else if(data.getDay() === 0){
  DayName =  "Sunday"
}
else{
  DayName =  "CodoFile";
}

function Javascript() {

  const [code,setcode] = useState("");

  const runCode = ()=>{
      try{
        toast.success("Code Execution Started")
        let textCode = document.querySelector(".dartpython").value;
        eval(textCode);
      }
      catch(err){
        toast.error("Please Enter Valid Code")
        console.log(`${err}`);
      }
};



const originalConsoleLog = console.log;

useEffect(()=>{
  const consoleOutput = document.getElementById('consoleOutput');
  const btn = document.querySelector('.btn1');

  const consoleLoghandler = function(message){
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    consoleOutput.appendChild(paragraph);
    originalConsoleLog.apply(console);
  };

  btn.addEventListener('click',()=>{
    consoleOutput.innerHTML = "";
  });

  console.log = consoleLoghandler;

  return ()=>{
    btn.removeEventListener('click',()=>{
      consoleOutput.innerHTML = "";
    });
    console.log = originalConsoleLog;
  };
},[]);

// useEffect(()=>{
//   console.log = function(message){
//     const consoleOutput = document.getElementById('consoleOutput');
//       const btn = document.querySelector('.btn1');
//       btn.addEventListener('click',()=>{
//         consoleOutput.innerText = "";
//       })
//       const paragraph = document.createElement('p');
//       paragraph.textContent = message;
//       consoleOutput.appendChild(paragraph);
//       // originalConsoleLog.apply(cons5ole,arguments);
//       originalConsoleLog.apply(console);
//     };
//   })

  const clear = ()=>{
    toast.success("Output Cleared")
    const box = document.querySelector("#consoleOutput");
    box.innerHTML = "";
  }

  const copyContent = ()=>{
    navigator.clipboard.writeText(code);
    toast.success("Copied to Clipboard")
  }
 
  const codeToFile = ()=>{
    toast.success("Download Started");

    const text = document.querySelector(".dartpython").value;
    const blob = new Blob([text],{type:"text/javascript"});

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    const FileCodeName = `CodoFile-(${DayName})`;

    link.download = FileCodeName;
    link.click();
  }

  return (
    <>
      <div className="jsContainer"> 
            <div className="jsBody wholeeditorBody">
                <div className="leftLang">
                    <LangList leftcolorjs="white"/>
                </div>
                <div className="PlaygroundMain">
                  <div className='runHeaderJS'>
                    <div className='jsleftheaderfile jsfile'>
                      <mark><h2>index.js</h2></mark>
                      <div className='runbtn'>
                      <button className='vbtn'>
                      <img className='voicebtn' onClick={copyContent} src={copy_icon} alt='CopyClip'/>
                      </button>
                      <button className='vbtn'>
                      <img className='voicebtn' onClick={codeToFile} src={download_icon} alt='DownLoadCode'/>
                      </button>
                        {/* <button className='btn btn1' onClick={handleSubmit}>RUN</button> */}
                        <button className='btn btn1' onClick={runCode}>RUN</button>
                      </div>
                    </div>
                    <div className='jsrightheaderfile jsfile'>
                      <mark><p>OUTPUT</p></mark>
                      <button className='clear' onClick={clear}>Clear</button>
                    </div>
                  </div>
                  <div className='jsplayground playground'>
                    <div className='leftplayground snippet'>
                      <textarea className='dartpython' data-testid="jsTextarea" name="javascript" id="javascript" value={code} onChange={(e)=>setcode(e.target.value)} placeholder='console.log("Hello CodoPlayer");'></textarea>
                    </div>
                    <h1 className="invisible">
                      <mark>Output</mark>
                    </h1>
                    <div className='rightplayground snippet' id='consoleOutput' data-testid="consoleOutput" >
                    {/* <p>{output}</p> */}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Javascript


/*
Previous code

import React, { useEffect, useState } from 'react';
import LangList from '../Editor/LangList';
import voice from '../../assets/image.png';
import CodeMirror from '@uiw/react-codemirror';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { javascript } from '@codemirror/lang-javascript';
import copy_icon from '../../assets/copy_icon.gif';
import download_icon from '../../assets/download_logo.png';


function Javascript() {

  const [code,setcode] = useState("");
  const [output,setOutput] = useState("");

  const runCode = ()=>{
    try {
      const result = eval(code);
      if (result !== undefined) {
        setOutput(result.toString());
      } else {
        setOutput(output);
      }
    } catch (error) {
      setOutput(error.toString());
    }
  };

  const originalConsoleLog = console.log;

  useEffect(()=>{
    console.log = function(message){
      const consoleOutput = document.getElementById('consoleOutput');
      const btn = document.querySelector('.btn1');
      btn.addEventListener('click',()=>{
        consoleOutput.innerText = "";
      })
      const paragraph = document.createElement('p');
      // const paragraph = document.querySelector(".rightplayground")
      paragraph.textContent = message;

      consoleOutput.appendChild(paragraph);
      originalConsoleLog.apply(console,arguments);
    };
  },[])

  const clear = ()=>{
    const box = document.querySelector("#consoleOutput");
    box.innerHTML = "";
  }

  return (
    <>
      <div className="jsContainer"> 
            <div className="jsBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="PlaygroundMain">
                  <div className='runHeaderJS'>
                    <div className='jsleftheaderfile jsfile'>
                      <mark><h2>index.js</h2></mark>
                      <div className='runbtn'>
                      <button className='vbtn'>
                      <img className='voicebtn' src={copy_icon} alt='voice'/>
                      </button>
                      <button className='vbtn'>
                      <img className='voicebtn' src={download_icon} alt='voice'/>
                      </button>
                        <button className='btn btn1' onClick={runCode}>RUN</button>
                      </div>
                    </div>
                    <div className='jsrightheaderfile jsfile'>
                      <mark><p>OUTPUT</p></mark>
                      <button className='clear' onClick={clear}>Clear</button>
                    </div>
                  </div>
                  <div className='jsplayground playground'>
                    <div className='leftplayground snippet'>
                      <CodeMirror
                        value={code}
                        height='80vh'
                        theme={darcula}
                        // extensions={[javascript({jsx:true})]}
                        extensions={[javascript()]}
                        onChange={(value) =>{
                          setcode(value)
                        }}
                      />
                    </div>
                    <div className='rightplayground snippet' id='consoleOutput' >
                      {/* {setcode} */
                      /* {setOutput} */
                      /* {output} 
                      </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
      )
    }
    
    export default Javascript
*/