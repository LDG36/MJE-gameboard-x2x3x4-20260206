import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const QuickAccess = ({ levelcounter3, setLevelcounter3, selectedLangs, setSelectedLangs, modeOfTheBoard,  setModeOfTheBoard }) => {

    const navigate = useNavigate();
    const {state} = useLocation();

    if(modeOfTheBoard===""){
        setModeOfTheBoard(24);
    }



  return (
    <>
    <article className="settingsContainer" >
        
          <h1 className="landingHeader">Quick Access</h1>
          <div className="quickBtn">

            
                <button className="startBtn" onClick={() => 

                    {
                        setLevelcounter3(0);
                        modeOfTheBoard;
                        selectedLangs;
                        // const numberOfLanguages = selectedLangs?.length || 0;
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x3"; // fallback route
                        navigate(route);
                    }

                }>
                    The Fruits
                </button>
           
                <button className="startBtn"  onClick={() => {setLevelcounter3(1); navigate('/gameboard_x4');}}>
                    The Vegetables
                </button>


          </div>
    </article>
    </>
  )
}

export default QuickAccess