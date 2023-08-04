import React from 'react'
import LangList from './LangList'

function Html() {
  return (
    <>
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="voicePlayground">
                <mark>HTML</mark>
                </div>
            </div>
        </div>
    </>
  )
}

export default Html