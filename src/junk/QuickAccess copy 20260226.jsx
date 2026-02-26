import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import english from '../assets/flags/BritishFlag.webp';
// import french from '../assets/flags/FrenchFlag.webp';
// import german from '../assets/flags/GermanFlag.webp';
// import polish from '../assets/flags/PolishFlag.webp';
// import spanish from '../assets/flags/SpanishFlag.webp';


const QuickAccess = ({ levelcounter3, setLevelcounter3, selectedLangs, setSelectedLangs, modeOfTheBoard,  setModeOfTheBoard }) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    // const [levelcounter, setLevelcounter] = useState(1);
    // const numberOfLanguages = selectedLangs.length;

    ////////////////////////////////////
    // if(modeOfTheBoard===""){
    //     setModeOfTheBoard(12);
    // }
    // setModeOfTheBoard(12);
    ////////////////////////////////////
    
    // if(selectedLangs===""){
    //     setSelectedLangs([english, polish, spanish]);
    // }
    // useEffect(() => {
    // if (!selectedLangs || selectedLangs.length === 0) {
    //     setSelectedLangs([english, polish, spanish]);
    // }
    // }, []);

    // if (!selectedLangs || selectedLangs.length === 0) {
    // setSelectedLangs([english, polish, spanish]);
    // }

    // src={flagMap[lang]}

    // const flagMap = {
    //   english,
    //   french,
    //   german,
    //   polish,
    //   spanish
    // };

    // useEffect(() => {
    // if (!selectedLangs || selectedLangs.length < 2) {
    //     setSelectedLangs([
            
    //         flagMap.english,
    //         flagMap.polish,
    //         flagMap.spanish

    //     ]);
    // }
    // }, []);





  return (
    <>
    <article className="settingsContainer" >
        
          <h1 className="landingHeader">Quick Access</h1>

            <div className="funContainer">
                <p>
                    Quick Access is by default set to 12 tiles gameboard with two languages selection
                    (English and Polish). If you want to access different combination of languages and gameboard 
                    sizes - Quick Access remembers your last choice in the Settings page.  
                </p>
            </div>
            
        <div className="stylingQuickAccess">



          <div className="quickBtn">

            
                <button className="startBtn" onClick={() => 

                    {
                        // setSelectedLangs(["english", "polish", "spanish", "french"]);
                        setLevelcounter3(0);
                        // modeOfTheBoard;
                        // selectedLangs;
                        
                        // const numberOfLanguages = selectedLangs?.length || 0;
                        const numberOfLanguages = selectedLangs.length;
                        const route = {
                        2: "/gameboard_x2",
                        3: "/gameboard_x3",
                        4: "/gameboard_x4",
                        }[numberOfLanguages] || "/gameboard_x2"; // fallback route
                        navigate(route);
                    }

                }>
                    The Fruits
                </button>
           
                <button className="startBtn"  onClick={() => {setLevelcounter3(1); navigate('/gameboard_x2');}}>
                    The Vegetables
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(2); navigate('/gameboard_x4');}}>
                    The Actions
                </button>
            
                <button className="startBtn"   onClick={() => {setLevelcounter3(3); navigate('/gameboard_x4');}}>
                    The Homeware
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(4); navigate('/gameboard_x4');}}>
                    The Moods
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(5); navigate('/gameboard_x4');}}>
                    The Numbers
                </button>
            
                <button className="startBtn"  onClick={() => {setLevelcounter3(6); navigate('/gameboard_x4');}}>
                    The Transport
                </button>
            




          </div>
        </div>
    </article>
    </>
  )
}

export default QuickAccess