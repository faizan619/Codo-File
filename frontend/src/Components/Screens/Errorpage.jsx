import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useEffect } from 'react';
gsap.registerPlugin(Draggable);

function Errorpage() {
        useEffect(() => {
          Draggable.create("#box1", { type: "x,y", edgeResistance: 0.65,bounds: {right:5,left:10,top:5,bottom:5} });
          Draggable.create("#box2", { type: "x,y", edgeResistance: 0.65,bounds: {right:7,left:10,top:7,bottom:7} });
          Draggable.create("#box3", { type: "x,y", edgeResistance: 0.65,bounds: {right:10,left:10,top:10,bottom:10}});
        }, []);
  return (
    <div className='errorcontainer'>
    <div className="boxes">

        <div id="box1" className="box" style={{backgroundColor: 'red'}}>JavaScript Compiler </div>
        <div id="box2" className="box" style={{backgroundColor: 'blue'}}>Python Compiler</div>
        <div id="box3" className="box" style={{backgroundColor: 'green'}}>Java Compiler</div>
        <div id="box3" className="box" style={{backgroundColor: 'green'}}>Website Editor</div>
    </div>
    </div>
  )
}

export default Errorpage

