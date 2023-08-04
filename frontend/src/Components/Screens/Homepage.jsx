import React from 'react'
import Header from '../Header';
import LandingPage from '../HomepageScreen/LandingPage';
import CodingPage from '../HomepageScreen/CodingPage'; 
import ImageCod from '../../assets/JavaScript frameworks-rafiki.svg'
import HtmlCod from '../../assets/Website Creator-amico.svg'
import Pycod from '../../assets/Man reading-pana.svg'
import SpeechCod from '../../assets/Speech to text-bro.svg'
import CodJava from '../../assets/Coding-bro.svg'
import ImagCod from '../../assets/Writing on the wall-rafiki.svg'

function Homepage() { 
  return (
    <>
    <div className="container">
        <Header/> 
        <LandingPage/>
        <CodingPage 
          title="JavaScript Compiler"
          info={<>All The <mark>Logic</mark> That you need to Learn and Practice <mark> JavaScript </mark> will be Accomplished by this <mark> Js Text Editor </mark> .</>} 
          path='/editor/javaScript' 
          image={ImageCod}
        />
        <CodingPage
          title="Python Compiler"
          path="/editor/python"
          info={<>Leash out All your <mark> Logic and Understanding</mark> with the Easiest Programming Language <mark>Python</mark> in this Super Easy Web IDE</>}
          image={Pycod}
        />
        <CodingPage
          title="Java Compiler"
          path='/editor/java'
          info={<></>}
          image={CodJava}
        />
        <CodingPage
          title="Real-Time Website Editor"
          path="/editor/html"
          info={<>
            Bored Writing HTML codes in Editor then again and again refreshing Browser for Output?<br/>
            <mark>Try</mark> our <mark>Real Time Browser</mark> that Automatically updates the Page as per your Code/Program.
          </>}
          image={HtmlCod}
        />
        <CodingPage
          title="Image To Code"
          path='/image2text'
          image={ImagCod}
        />
        <CodingPage
          title="Voice To Code"
          path='/voice2text'
          image={SpeechCod}
        />
        <CodingPage
          title="What's More?"
          info={<>A <mark>Programmer</mark> has no Limitation towards <mark>Learning and Improving</mark> the World Through its Skills and Knowledge</>}
        />
    </div>
    </>
  )
}

export default Homepage