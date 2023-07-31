import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useEffect } from 'react';
import LangList from '../LangList';
import headerImg from '../../assets/favi-removebg-preview.png'
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(Draggable);


function Errorpage() {
        useEffect(() => {
          Draggable.create("#dragg", { type: "x,y", edgeResistance: 0.65,bounds: {left:50,top:50}});
        }, []);
  return (
  <div className="errorcontainer">
  <div className="errorHeader">
      {/* <Header/> */}
      <div className="errorheader1">
            <img className='errortopLogo' src={headerImg} alt="MainLogo" /><p>Codo File</p>
        </div>
  </div>
  <div className="errorBody">
      <div className="leftLang">
          <LangList/>
      </div>
      <div className="errorPage" >
          <div className="errortextcontainer" id='dragg'>
          <div className="messageEr">
            <h1>404</h1><h3 className='eerrrroorr'>The page you are looking for is out to <span style={{fontSize:"2rem",color:"gray"}}> lunch.</span></h3>
            <h3>Please come back later.</h3>
          </div><br />
            <NavLink to='/'><button className='btn'>Back to Home</button></NavLink>
          </div>
      </div>
  </div>
</div>
  )
}

export default Errorpage


