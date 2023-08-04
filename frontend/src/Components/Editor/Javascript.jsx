import React from 'react'
import LangList from '../Editor/LangList'

function Javascript() {
  return (
    <>
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="voicePlayground">
                <mark>JavaScript</mark>
                </div>
            </div>
        </div>
    </>
  )
}

export default Javascript