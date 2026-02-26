import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const QuickAccess = ({ levelcounter3, setLevelcounter3, selectedLangs, setSelectedLangs, modeOfTheBoard,  setModeOfTheBoard }) => {

    const navigate = useNavigate();
    const {state} = useLocation();


  return (
    <>
    <article className="settingsContainer" >
        
          <h1 className="landingHeader">Quick Access</h1>

            <div className="funContainer">
                <p>
                    Quick Access is by default set to 12 tiles gameboard with two languages selection
                    (English and Spanish). If you want to access different combination of languages and gameboard 
                    sizes - Quick Access remembers your last choice in the Settings page.  
                </p>
            </div>

        <div className="stylingQuickAccess">



          <div className="quickBtn">

            
                <button className="startBtn" onClick={() => {
                        setLevelcounter3(0);
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }}>
                    The Fruits
                </button>
           
                <button className="startBtn"  onClick={() => {
                        setLevelcounter3(1); 
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }}>
                    The Vegetables
                </button>
            
                <button className="startBtn"  onClick={() => {
                        setLevelcounter3(2); 
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }}>
                    The Actions
                </button>
            
                <button className="startBtn"   onClick={() => {
                        setLevelcounter3(3); 
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }}>
                    The Homeware
                </button>
            
                <button className="startBtn"  onClick={() => {
                        setLevelcounter3(4); 
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }}>
                    The Moods
                </button>
            
                <button className="startBtn"  onClick={() => {
                        setLevelcounter3(5); 
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }}>
                    The Numbers
                </button>
            
                <button className="startBtn"  onClick={() => {
                        setLevelcounter3(6); 
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }}>
                    The Transport
                </button>
            




          </div>
        </div>
    </article>
    </>
  )
}

export default QuickAccess