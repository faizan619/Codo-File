import React from 'react';
import LangList from './LangList'
import voice from '../../assets/image.png' 
import CodeMirror from '@uiw/react-codemirror';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { python } from '@codemirror/lang-python'


function Python() {

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
                      <button className='vbtn'>
                      <img className='voicebtn' src={voice} alt='voice'/>
                      </button>
                        <button className='btn'>RUN</button>
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
                        // value={code}
                        height='80vh'
                        theme={darcula}
                        // extensions={[javascript({jsx:true})]}
                        extensions={[python()]}
                        // onChange={(value) =>{
                        //   setcode(value)
                        // }}
                      />
                    </div>
                    <div className='rightplayground snippet' id='consoleOutput' >
                    <p>i am output session</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Python