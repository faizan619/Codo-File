import React, { useEffect, useRef } from 'react';
import LangList from './LangList';
import photohtml from '../../assets/html.png';
import photocss from '../../assets/css.png';
import photojs from '../../assets/js.png';
import { toast } from 'react-hot-toast';

function Html() {
  const html_code = useRef(null);
  const css_code = useRef(null);
  const js_code = useRef(null);
  const result = useRef(null); 
  const run_button = useRef(null);
  
  useEffect(() => {
    const run = () => { 
      localStorage.setItem('html_code', html_code.current.value);
      localStorage.setItem('css_code', css_code.current.value);
      result.current.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>`+localStorage.html_code;
      }
    const jsrun = ()=>{
      toast.success('Saved');
      localStorage.setItem('js_code', js_code.current.value);
      result.current.contentWindow.eval(localStorage.js_code);
    
    }
    
    html_code.current.onkeyup = () => run();
    css_code.current.onkeyup = () => run();

    run_button.current.onclick = () => jsrun();

    html_code.current.value = localStorage.html_code;
    css_code.current.value = localStorage.css_code;
    js_code.current.value = localStorage.js_code;
  }, []);

  
  return (
    <>
      <div className="voiceContainer">
        <div className="voiceBody wholeeditorBody">
          <div className="leftLang">
            <LangList leftcolorhtml="white" />
          </div>
          <h1 className="invisible"><mark>Web Editor</mark></h1>
          <div className="voicePlayground">
            <div className="htmlcodeEditor">
              <div className="editormain">
                <div className="html-code codemaincode">
                  <h1 className='webeditorheading'><img src={photohtml} alt="H"/> HTML</h1>
                  <textarea data-testid="htmlTextarea" ref={html_code}></textarea>
                </div>
                <div className="css-code codemaincode">
                  <h1 className='webeditorheading'><img src={photocss} alt="H"/>CSS</h1>
                  <textarea data-testid="cssTextarea" ref={css_code}></textarea>
                </div>
                <div className="js-code codemaincode">
                  <h1 className='webeditorheading'><img src={photojs} alt="H"/>JavaScript <button data-testid="runButton" ref={run_button} className='jsrunbtn'>RUN</button> </h1>
                  <textarea spellCheck='false' ref={js_code}></textarea>
                </div>
              </div>
              <h1 className="invisible"><mark>Output</mark></h1>
              <iframe title='result' data-testid="result" id='result' ref={result}></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Html;