import React from 'react';
import BritishFlag from '../assets/flags/BritishFlag.webp';
import FrenchFlag from '../assets/flags/FrenchFlag.webp';
import GermanFlag from '../assets/flags/GermanFlag.webp';
import PolishFlag from '../assets/flags/PolishFlag.webp';
import SpanishFlag from '../assets/flags/SpanishFlag.webp';

import english from '../assets/flags/BritishFlag.webp';
import french from '../assets/flags/FrenchFlag.webp';
import german from '../assets/flags/GermanFlag.webp';
import polish from '../assets/flags/PolishFlag.webp';
import spanish from '../assets/flags/SpanishFlag.webp';

import { useNavigate } from "react-router-dom";
import { useState , useEffect, useRef} from 'react';
import {useLocation} from "react-router-dom"



const Selection = ({selectedLangs, setSelectedLangs, modeOfTheBoard,  setModeOfTheBoard }) => {

const [selected, setSelected] = useState([]);
const [mode, setMode] = useState(24); 
const navigate = useNavigate();
const {state} = useLocation();
const flagMap = {
  english,
  french,
  german,
  polish,
  spanish
};

//displayin validation message with fade out effect
const [validationMsg, setValidationMsg] = useState("");
const [showMsg, setShowMsg] = useState(false);
const [fade, setFade] = useState(false);
const [msgKey, setMsgKey] = useState(0);
useEffect(() => {
  if (!validationMsg) return;
  setShowMsg(true);
  setFade(false);
  const fadeTimer = setTimeout(() => {
    setFade(true);
  }, 2000); // small delay so CSS transition triggers
  const hideTimer = setTimeout(() => {
    setShowMsg(false);
  }, 6000);
  return () => {
    clearTimeout(fadeTimer);
    clearTimeout(hideTimer);
  };
}, [msgKey]); //[validationMsg][msgKey]


function handleCheckboxChange(e) {
  const value = e.target.value;
  setSelected(prev =>
    prev.includes(value)
      ? prev.filter(v => v !== value)
      : [...prev, value]
  );
}

function handleX2() {
  if (selected.length !== 2) {
    setValidationMsg("For option 2x please select two flags");
    setMsgKey(prev => prev + 1); 
    return;
  }

  setSelectedLangs(selected);
  setModeOfTheBoard(Number(mode));
  
  navigate('/gameboard_x2', {
    // state: { 
    //   // languages: selected,
    //   // gameboardSize: mode
    //   selected, mode
    //  }
  });
}

function handleX3() {
  if (selected.length !== 3) {
    setValidationMsg("For option 3x please select three flags");
    setMsgKey(prev => prev + 1); 
    return;
  }

  setSelectedLangs(selected);
  setModeOfTheBoard(Number(mode));

  navigate('/gameboard_x3', {
    // state: { 
    //   selected, mode
    //  }
  });
}

function handleX4() {
  if (selected.length !== 4) {
    setValidationMsg("For option 4x please select four flags");
    setMsgKey(prev => prev + 1); 
    return;
  }

  setSelectedLangs(selected);
  setModeOfTheBoard(Number(mode));

  navigate('/gameboard_x4', {
    // state: { 
    //   selected, mode
    //  }
  });
}



  return (
    <div className="FormContainer settingsContainer">


        <h1 className="settingsHeading">Settings</h1>

        <div className="buttons">
          <button onClick={handleX2} className="startBtn_x2x3x4"><h1>x2</h1></button>
          <button onClick={handleX3} className="startBtn_x2x3x4"><h1>x3</h1></button>
          <button onClick={handleX4} className="startBtn_x2x3x4"><h1>x4</h1></button>
        </div>

        {/* <form> */}

        {/* <button type="submit" formaction="/save" className="startBtn"><h1>x2</h1></button>
        <button type="submit" formaction="/preview" className="startBtn"><h1>x3</h1></button>
        <button type="submit" formaction="/delete" className="startBtn"><h1>x4</h1></button> */}

        <br/>
        <br/>

        {/* <input type="submit" name="action" value="x2" className="startBtn"/>
        <input type="submit" name="action" value="x3" className="startBtn"/>
        <input type="submit" name="action" value="x4" className="startBtn"/>
        <br/>
        <br/> */}

        {/* <label className="image-selector" for="name1">
          <input type="checkbox" id="name1" name="name1" value="option1"/>
          <img src={BritishFlag} alt="" />
        </label>

        <label className="image-selector" for="name2">
          <input type="checkbox" id="name2" name="name2" value="option2"/>
          <img src={PolishFlag} alt="" />
        </label>

        <label className="image-selector" for="name3">
          <input type="checkbox" id="name3" name="name3" value="option3"/>
          <img src={SpanishFlag} alt="" />
        </label>

        <label className="image-selector" for="name4">
          <input type="checkbox" id="name4" name="name4" value="option4"/>
          <img src={FrenchFlag} alt="" />
        </label>

        <label className="image-selector" for="name5">
          <input type="checkbox" id="name5" name="name5" value="option5"/>
          <img src={GermanFlag} alt="" />
        </label> */}

        {["english", "french", "german", "polish", "spanish"].map(lang => (
          <label key={lang}  className="image-selector">
            <input type="checkbox" value={lang} checked={selected.includes(lang)} onChange={handleCheckboxChange}/>
            <img src={flagMap[lang]} alt="" />
          </label>
        ))}

        
        <br/>
        <br/>
        {/* {
        setTimeout(()=>{
        <h1 className="validMsg">{validationMsg}</h1>
        },2000)
        } */}
        {/* {showMsg && (
          <h1 className="validMsg">{validationMsg}</h1>
        )} */}
        {showMsg && (
          <h1 className={`validMsg ${fade ? "fade-out" : ""}`}>
            {validationMsg}
          </h1>
        )}

        {/* </form>      */}


        <div className="mode-selector">
          {["12", "24", "36"].map(option => (
            <label key={option} className={`mode-btn ${mode === option ? "active" : ""}`}>
              <input type="radio" name="mode" value={option} checked={mode === option} onChange={() => setMode(option)}/>
              <h1>{option}</h1>
            </label>
          ))}
        </div>


    </div>
  )
}

export default Selection