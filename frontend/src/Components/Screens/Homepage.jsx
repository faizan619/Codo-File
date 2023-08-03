import React from 'react'
import Header from '../Header';
import LandingPage from '../HomepageScreen/LandingPage';
import CodingPage from '../HomepageScreen/CodingPage';
// import Coding from '../../ApiData/CodingComponent'
// import JavaScript from '../Editor/Javascript'
// import ImageCoding from '../../assets/JavaScript frameworks-rafiki.svg'
import ImageCod from '../../assets/JavaScript frameworks-rafiki.svg'
function Homepage() { 
  return (
    <>
    <div className="container">
        <Header/> 
        <LandingPage/>
        <CodingPage path='/editor/javaScript' title="JavaScript Compiler"/>
        <CodingPage/>
        <CodingPage/>
        <CodingPage/>
    </div>
    </>
  )
}

export default Homepage