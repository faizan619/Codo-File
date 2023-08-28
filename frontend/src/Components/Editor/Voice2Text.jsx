import { useEffect } from 'react';
import 'regenerator-runtime/runtime'; 
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useState } from 'react';
import LangList from './LangList';
import { toast } from 'react-hot-toast';
// import Header from '../Header';


function Voice2Text() {
  let [textToCopy,setTextToCopy] = useState();
  let [isCopied, setCopied] = useClipboard(textToCopy);

  const phraseToSymbolMap = {
    'semicolon': ';',
    'semi colon': ';',
    'comma': ',',
    'colon':':',
    'dot':'.',
    'open parentheses':'(',
    'close parentheses':')',
    'open round bracket':'(',
    'open roundbracket':'(',
    'close round bracket':')',
    'closed round bracket':')',
    'close roundbracket':')',
    'closed roundbracket':')',
    'open curly bracket':'{',
    'open curlybracket':'{',
    'close curlybracket':'}',
    'close curly bracket':'}',
    'open squarebracket':'[',
    'open square bracket':'[',
    'clsoe square bracket':']',
    'close squarebracket':']',
    'open single codes':"'",
    'open singlcodes':"'",
    'close single codes':"'",
    'closed single codes':"'",
    'close singlcodes':"'",
    'closed singlcodes':"'",
    'open double codes':'"',
    'open doublcuote':'"',
    'close double cuote':'"',
    'close doublcuote':'"'
  }

    const startListening = () =>{  
      toast.success("Start Speaking");
      toast.loading("Listening...",{duration:10})
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    } 

  const processTranscript = (transcript) => {
    // console.log('Original transcript:', transcript); // Add this line
    let processedTranscript = transcript;
  
    for (const [phrase, symbol] of Object.entries(phraseToSymbolMap)) {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi'); // Use word boundary and case-insensitive flag
      processedTranscript = processedTranscript.replace(regex, symbol);
    }
  
    // console.log('Processed transcript:', processedTranscript); // Add this line
    setTextToCopy(processedTranscript);
  };

  const { transcript,resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  
  useEffect(() => {
    processTranscript(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesnt support speech recognition.</span>;
  }

  const clearAll = ()=>{
    // const tar = document.querySelector(".voiceresultclass")
    // tar.innerHTML = ""
    setTextToCopy("");
    resetTranscript();
    toast.success("Text Cleared")
  }

  return (
    <>
        <div className="voiceContainer">
            <div className="voiceBody wholeeditorBody">
                <div className="leftLang">
                    <LangList leftcolorv="white"/>
                </div>
                <div className="voicePlayground">
                    <h1 className="title">Voice to Text Converter</h1>
                    <div className="voiceTextContainer">
                        <div className="voice2TextOutput" onClick={()=>setTextToCopy(textToCopy)}>
                            {/* <mark><h3 contentEditable>{transcript}</h3></mark> */}
                            <mark><h3 className='voiceresultclass'>{textToCopy}</h3></mark>
                        </div>
                        <div className="btngroup">
                            <button onClick={startListening}>Start</button>
                            <button onClick={SpeechRecognition.stopListening}>Stop</button>
                            <button onClick={setCopied}>{isCopied ? "Copied" : "Copy"}</button>
                            <button onClick={clearAll}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Voice2Text;


/*

dependencies to install--

npm install --save react-speech-recognition

npm i --save regenerator-runtime

npm install --save-dev @babel/plugin-transform-runtime @babel/runtime

npm install react-use-clipboard

npm run dev

*/