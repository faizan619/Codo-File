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
import MoreCod from '../../assets/Sponsor-rafiki.svg';
import Feedback from '../HomepageScreen/Feedback';
import Footer from '../HomepageScreen/Footer';

function Homepage() { 
  return (
    <>
    <div className="container">
        {/* <Header/>  */}
        <LandingPage/> 
        <CodingPage 
          title="JavaScript Compiler"
          info={<>All The <mark>Logic</mark> That you need to Learn and Practice <mark> JavaScript </mark> will be Accomplished by this <mark> Js Text Editor </mark> .</>} 
          path='/editor/javaScript' 
          image={ImageCod}
          poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Python Compiler"
          path="/editor/python"
          info={<>Leash out All your <mark> Logic and Understanding</mark> with the Easiest Programming Language <mark>Python</mark> in this Super Easy Web IDE</>}
          image={Pycod}
          poss={{'flexDirection':'row-reverse'}}
        />
        <CodingPage
          title="Java Compiler"
          path='/editor/java'
          info={<><mark>Java</mark> is a Language that directly connect with the computer memory System.Embrace your <mark>Knowledge</mark> with <mark>Java Code Editor</mark></>}
          image={CodJava}
          poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Real-Time Website Editor"
          path="/editor/html"
          info={<>
            Bored Writing HTML codes in Editor then again and again refreshing Browser for Output?<br/>
            <mark>Try</mark> our <mark>Real Time Browser</mark> that Automatically updates the Page as per your Code/Program.
          </>}
          image={HtmlCod}
          poss={{'flexDirection':'row-reverse'}}
        />
        <CodingPage
          title="Image To Code"
          path='/image2text'
          image={ImagCod}
          info={<>
            Turn Your <mark>Image into Reality</mark> with this amazing Feature of <mark>Image to Code</mark> Tool. 
          </>}
          poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Voice To Code"
          path='/voice2text'
          image={SpeechCod}
          info={<>
            <mark>"Words Speak more than Actions"</mark> let this quote get Install into your life by our latest tool <mark>Voice to Text</mark> feature .
          </>}
          poss={{'flexDirection':'row-reverse'}}
        />
        <CodingPage
          title="What's More?"
          info={<>A <mark>Programmer</mark> has no Limitation towards <mark>Learning and Improving</mark> the World Through its Skills and Knowledge</>}
          image={MoreCod}
          poss={{'flexDirection':'row'}}
        />
        <Feedback/>
        <Footer/>
    </div>
    </>
  )
}

export default Homepage