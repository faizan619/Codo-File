import React from 'react'
import LangList from './LangList'

function Image2Text() {
  return (
    <>
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="voicePlayground">
                </div>
            </div>
        </div>
    </>
  )
}

export default Image2Text