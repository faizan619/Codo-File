import 'regenerator-runtime/runtime'; 
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useState } from 'react';
import LangList from './LangList';
// import Header from '../Header';


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
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="voicePlayground">
                    <h1 className="title">Voice to Text Converter</h1>
                    <div className="voiceTextContainer">
                        <div className="voice2TextOutput" onClick={()=>setTextToCopy(transcript)}>
                            <mark><h3 contentEditable>{transcript}</h3></mark>
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




import 'regenerator-runtime/runtime';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useState, useEffect } from 'react';
import LangList from './LangList';

function Voice2Text() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);

  const phraseToSymbolMap = {
    'semi colon': ';',
    'comma': ',',
    // Add more mappings as needed
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const processTranscript = (transcript) => {
    let processedTranscript = transcript;

    for (const [phrase, symbol] of Object.entries(phraseToSymbolMap)) {
      processedTranscript = processedTranscript.replace(phrase, symbol);
    }

    setTextToCopy(processedTranscript);
  };

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    processTranscript(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="voiceContainer">
        <div className="voiceBody">
          <div className="leftLang">
            <LangList />
          </div>
          <div className="voicePlayground">
            <h1 className="title">Voice to Text Converter</h1>
            <div className="voiceTextContainer">
              <div className="voice2TextOutput">
                <mark><h3>{textToCopy}</h3></mark>
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
  );
}

export default Voice2Text;


*/