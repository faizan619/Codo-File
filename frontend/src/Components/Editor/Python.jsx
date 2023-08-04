import React from 'react'
import LangList from './LangList'

function Python() {
  return (
    <>
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="voicePlayground">
                <mark>Python</mark>
                </div>
            </div>
        </div>
    </>
  )
}

export default Python