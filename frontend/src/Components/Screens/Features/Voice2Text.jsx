import 'regenerator-runtime/runtime'; 
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useState } from 'react';

function Voice2Text() {
  const [textToCopy,setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
    //   const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesnt support speech recognition.</span>;
  }
  return (
    <>
        <div className="voiceContainer">
            <div className="voiceHeader">
                i am header
            </div>
            <div className="voiceBody">
                <div className="leftLang">
                    i am left side
                </div>
                <div className="voicePlayground">
                    <h1 className="title">Voice to Text Converter</h1>
                    <div className="voiceTextContainer">
                        <div className="voice2TextOutput" onClick={()=>setTextToCopy(transcript)}>
                            <p>{transcript}</p>
                        </div>
                        <div className="btngroup">
                            <button onClick={setCopied}>Copied? {isCopied ? "Yes!" : "Nope!"}</button>
                            <button onClick={startListening}>Start Listening</button>
                            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
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