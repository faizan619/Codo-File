import React from 'react'
import LangList from './LangList'
import voice from '../../assets/image.png'

function Java() {
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
                      <mark><h2>Codo File</h2></mark>
                      <div className='runbtn'>
                      <button className='vbtn'>
                      <img className='voicebtn' src={voice} alt='voice'/>
                      </button>
                        <button className='btn'>RUN</button>
                      </div>
                    </div>
                    <div className='jsrightheaderfile jsfile'>
                      <mark><p>OUTPUT</p></mark>
                      <button className='clear'>Clear</button>
                    </div>
                  </div>
                  <div className='jsplayground playground'>
                    <div className='leftplayground snippet'>
                      i am writing part
                    </div>
                    <div className='rightplayground snippet'>
                      i am output session
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Java