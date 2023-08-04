import React from 'react'
import LangList from './LangList'

function Java() {
  return (
    <>
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="voicePlayground">
                <mark>Java</mark>
                </div>
            </div>
        </div>
    </>
  )
}

export default Java