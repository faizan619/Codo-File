import React from 'react'
// import Header from '../Header';
import LandingPage from '../HomepageScreen/LandingPage';
import CodingPage from '../HomepageScreen/CodingPage'; 
import ImageCod from '../../assets/JavaScript frameworks-rafiki.svg'
import HtmlCod from '../../assets/Website Creator-amico.svg'
import Pycod from '../../assets/Man reading-pana.svg'
import SpeechCod from '../../assets/Speech to text-bro.svg'
import CodJava from '../../assets/Coding-bro.svg'
import ImagCod from '../../assets/Writing on the wall-rafiki.svg'
// import MoreCod from '../../assets/Sponsor-rafiki.svg';
import MoreCod from '../../assets/paralympic winners podium-pana.svg';
import Feedback from '../HomepageScreen/Feedback';
import Footer from '../HomepageScreen/Footer';

function Homepage() { 

  const width2 = window.outerWidth;

  return (
    <>
    <div className="smallScreen">
      <mark>The Screen is Visible with width more than 250px <br/><br/><hr/><br/>Screen Size: {width2}px</mark>
    </div>
    <div className="container">
        {/* <Header/>  */}
        <LandingPage/> 
        <CodingPage 
          title="JavaScript Compiler"
          con="Run JavaScript"
          info={<>All The <mark>Logic</mark> That you need to Learn and Practice <mark> JavaScript </mark> will be Accomplished by this <mark> Js Text Editor </mark> .</>} 
          path='/editor/javaScript' 
          image={ImageCod}
          // poss={{'flexDirection':'row'}}
          
        />
        <CodingPage
          title="Python Compiler"
          con="Run Python"
          path="/editor/python"
          info={<>Leash out All your <mark> Logic and Understanding</mark> with the Easiest Programming Language <mark>Python</mark> in this Super Easy Web IDE</>}
          image={Pycod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Dart Compiler"
          path='/editor/java'
          con="Run Dart"
          info={<><mark>Dart</mark> is a Programming Language <mark>Developed by Google</mark> and it is use with <mark>Flutter </mark>to Create Mobile and Web Application .Embrace your <mark>Knowledge</mark> with <mark>Dart Code Editor</mark></>}
          image={CodJava}
          // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Real-Time Website Editor"
          path="/editor/html"
          con="Try Web Editor"
          info={<>
            Bored Writing HTML codes in Editor then again and again refreshing Browser for Output?<br/>
            <mark>Try</mark> our <mark>Real Time Browser</mark> that Automatically updates the Page as per your Code/Program.
          </>}
          image={HtmlCod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Image To Code"
          path='/editor/image2text'
          image={ImagCod}
          con="Get Started"
          info={<>
            Turn Your <mark>Image into Reality</mark> with this amazing Feature of <mark>Image to Code</mark> Tool. 
          </>}
          // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Voice To Code"
          path='/editor/voice2text'
          image={SpeechCod}
          info={<>
            <mark>"Words Speak more than Actions"</mark> let this quote get Install into your life by our latest tool <mark>Voice to Text</mark> feature .
          </>}
          con="Get Started"
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="What We Earned?"
          path="https://drive.google.com/file/d/1wynjrv73vmnbzIsonh8dfJy_SweR3sq1/view?usp=sharing"
          // info={<>A <mark>Programmer</mark> has no Limitation towards <mark>Learning and Improving</mark> the World Through its Skills and Knowledge</>}
          info={<>Achieved <mark><u>First</u></mark> position in <mark>Website Competition</mark> held in <mark>L.N College - Borivali(East).</mark> </>}
          con="View Certificate"
          image={MoreCod}
          // poss={{'flexDirection':'row'}}
        />
        <Feedback/>
        <Footer/>
        {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
    </div>
    </>
  )
}

export default Homepage