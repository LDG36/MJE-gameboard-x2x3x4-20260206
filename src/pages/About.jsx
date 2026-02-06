import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const About = ({ levelcounter3, setLevelcounter3 }) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    // const [levelcounter, setLevelcounter] = useState(1);

  return (
    <>
    <article className="settingsContainer" >
        
        <div className="stylingAbout">
            <h1 className="landingHeader2">About</h1>
            <p className="MJEdescription2">
                As presented at the homepage, the MahJong Europa (MJE) was developed by Lukasz Galik as part
                of Honours Project at Edinburgh Napier University. MJE is a language learning app available as a website.
            </p>
            <p className="MJEdescription2">
                MJE was developed in JavaScript together with React.js library/framework.
                It is a front end only at the moment. It uses Vite to set up web app environment.
                It uses JSX to incorporate an HTML code into the JavaScript - which is a common 
                practice in React.js. 
            </p>
            <p className="MJEdescription2">
              MJE is being stored and backed up using GitHub repository. GitHub is connected
              with Netlify and MJE is hosted at the following URL address: https://mahjongeuropa2.netlify.app/
              Netlify is a fee hosting provider for front-end websites.
            </p>
        </div>
        <div className="stylingQuickAccess">
          <h1 className="landingHeader">Quick Access</h1>
          <div className="quickBtn">
            
                <button className="startBtn" onClick={() => {setLevelcounter3(0); navigate('/gameboard');}}>
                    The Fruits
                </button>
           
                <button className="startBtn"  onClick={() => {setLevelcounter3(1); navigate('/gameboard');}}>
                    The Vegetables
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(2); navigate('/gameboard');}}>
                    The Actions
                </button>
            
                <button className="startBtn"   onClick={() => {setLevelcounter3(3); navigate('/gameboard');}}>
                    The Homeware
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(4); navigate('/gameboard');}}>
                    The Moods
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(5); navigate('/gameboard');}}>
                    The Numbers
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(6); navigate('/gameboard');}}>
                    The Transport
                </button>
            
          </div>
        </div>
    </article>
    </>
  )
}

export default About