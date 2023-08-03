import React from 'react';
import mic from '../../assets/mic.png';
import js from '../../assets/js.png'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import python from '../../assets/python.png';
import java from '../../assets/java.png';
import image from '../../assets/image.png';
import { NavLink } from 'react-router-dom';


function LangList() {
  return (
    <>
        <div className="LangContainer">
            <div className="LangSection">
                <div className="languages">
                    <div className="languageBorder">
                        <NavLink to="/editor/javascript"><img src={js} alt="JLanguage " /></NavLink>
                    </div>
                    <div className="languageBorder">
                        <NavLink to="/editor/html"><img src={html} alt="Language "  /></NavLink>
                    </div>
                    <div className="languageBorder">
                        <NavLink to="/editor/python"><img src={python} alt="Language "  /></NavLink>
                    </div>
                    <div className="languageBorder">
                        <NavLink to="/editor/css"><img src={css} alt="Language "/></NavLink>
                    </div>
                    <div className="languageBorder">
                        <NavLink to="/editor/java"><img src={java} alt="Language "/></NavLink>
                    </div>
                </div>
            </div>
            <div className="FeatureSection languages">
                <div className="languageBorder">
                    <NavLink to="/voice2text"><img src={image} alt="feature "  /></NavLink>
                </div>
                <div className="languageBorder">
                    <NavLink to="/image2text"><img src={mic} alt="feaute"  /></NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default LangList