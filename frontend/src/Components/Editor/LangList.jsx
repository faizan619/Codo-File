import React from 'react';
import mic from '../../assets/mic.png';
import js from '../../assets/js.png'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import python from '../../assets/python.png';
import java from '../../assets/java.png';
import image from '../../assets/image.png';
import { NavLink } from 'react-router-dom';


function LangList(props) {
  return (
    <> 
    <div className="LangContainer">
            <div className="langSection languages">
                <div className="languageBorder" style={{'backgroundColor':`${props.leftcolorjs}`}}>
                        <NavLink to="/editor/javascript"><img src={js} alt="JLanguage " /></NavLink>
                        {/* <a href="/editor/javascript"><img src={js} alt="JLanguage " /></a> */}
                </div>
                <div className="languageBorder" style={{'backgroundColor':`${props.leftcolorhtml}`}}>
                        <NavLink to="/editor/html"><img className={props.html} src={html} alt="Language " /></NavLink>
                </div>
                <div className="languageBorder" style={{'backgroundColor':`${props.leftcolorpy}`}}>
                        {/* <a href="/editor/python"><img className={props.py} src={python} alt="Language "  /></a> */}
                        <NavLink to="/editor/python"><img className={props.py} src={python} alt="Language "  /></NavLink>
                </div>
                <div className="languageBorder" style={{'backgroundColor':`${props.leftcolorhtml}`}}>
                        <NavLink to="/editor/css"><img className={props.html} src={css} alt="Language "/></NavLink>
                </div>
                <div className="languageBorder" style={{'backgroundColor':`${props.leftcolordart}`}}>
                        <NavLink to="/editor/java"><img className={props.dart} src={java} alt="Language "/></NavLink>
                        {/* <a href="/editor/java"><img className={props.dart} src={java} alt="Language "/></a> */}
                </div>
            </div>
            <div className="FeatureSection languages">
                <div className="languageBorder" style={{'backgroundColor':`${props.leftcolorv}`}}>
                    <NavLink to="/editor/voice2text"><img src={image} alt="feature "  /></NavLink>
                </div>
                <div className="languageBorder" style={{'backgroundColor':`${props.leftcolori}`}}>
                    <NavLink to="/editor/image2text"><img src={mic} alt="feaute"  /></NavLink>
                </div>
            </div>
    </div>
    </>
  )
}

export default LangList