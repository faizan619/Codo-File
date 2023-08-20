import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useEffect } from 'react';
import LangList from '../Editor/LangList';
// import headerImg from '../../assets/favi-removebg-preview.png'
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(Draggable);


function Errorpage() {
        useEffect(() => {
          Draggable.create("#dragg", { type: "x,y", edgeResistance: 0.65,bounds: {left:50,top:50}});
        }, []);

        document.addEventListener('mousemove',function(details){
          document.querySelectorAll("h1").forEach((elem)=>{
              const position = elem.getAttribute("value");
              var x = (window.innerWidth - details.clientX * position)/100;
              var y = (window.innerHeight = details.clientY * position)/100;
  
              elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
          })
      })
  return (
  <div className="errorcontainer">
  <div className="errorBody">
      <div className="leftLang">
          <LangList/>
      </div>
      <div className="errorPage">
          <div className="errortextcontainer" id='dragg'>
          <div className="messageEr">
            <h1  value="7" >404</h1><h3 className='eerrrroorr'>The page you are looking for is out to <span style={{fontSize:"2rem",color:"gray"}}> lunch.</span></h3>
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


