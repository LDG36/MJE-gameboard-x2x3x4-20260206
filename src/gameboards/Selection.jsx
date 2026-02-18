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



const Selection = () => {

const [selected, setSelected] = useState([]);
const navigate = useNavigate();
const {state} = useLocation();
const flagMap = {
  english,
  french,
  german,
  polish,
  spanish
};

//displayin validation message with fade out effect //second click does not work -> needs fix
const [validationMsg, setValidationMsg] = useState("");
const [showMsg, setShowMsg] = useState(false);
const [fade, setFade] = useState(false);
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
}, [validationMsg]);




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
    setValidationMsg("For option 2x please select 2 custom languages");
    return;
  }

  navigate('/gameboard_x2', {
    state: { languages: selected }
  });
}

function handleX3() {
  if (selected.length !== 3) {
    setValidationMsg("For option 3x please select 3 custom languages");
    return;
  }

  navigate('/gameboard_x3', {
    state: { languages: selected }
  });
}

function handleX4() {
  if (selected.length !== 4) {
    setValidationMsg("For option 4x please select 4 custom languages");
    return;
  }

  navigate('/gameboard_x4', {
    state: { languages: selected }
  });
}



  return (
    <div className="FormContainer">



        <div className="buttons">
          <button onClick={handleX2} className="startBtn"><h1>x2</h1></button>
          <button onClick={handleX3} className="startBtn"><h1>x3</h1></button>
          <button onClick={handleX4} className="startBtn"><h1>x4</h1></button>
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

    </div>
  )
}

export default Selection