import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom"
import { useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";




const Nextboard = ({ levelcounter3, setLevelcounter3 }) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    //const {moves, time, levelcounter} = state;
    //---------------------------------------------------------------nextboard level control - two const one for repeat and one for next gameboard
    // const originalLevel = state?.levelcounter;
    // const [levelcounter2, setLevelcounter2] = useState(originalLevel);
    //---------------------------------------------------------------

    //---------------------------------------------------------------nextboard level control
    // useEffect(() => {
    //   setLevelcounter2(prev => prev + 1);
    //   // setLevelcounter2(levelcounter2 => levelcounter2 + 1)
    // }, [])


    const formatTime = (ms) => 
    {
      const minutes = Math.floor(ms / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      // const milliseconds = ms % 1000;
      const hundredths = Math.floor((ms % 1000) / 10);


      return (
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + "." +
        String(hundredths).padStart(2, "0")
        );
    };


  return (
    <div className="settingsContainer">

      {/* <Link to="/gameboard"> */}
      <button className="backToStartBtn" onClick={() => {setLevelcounter3(levelcounter3); navigate('/gameboard') }}>
      {/* <button className="backToStartBtn"> */}
        Repeat
      </button>
      {/* </Link> */}

      {/* <Link to="/playmoods"> */}
      {/* <button className="startBtn2" OnClick={() => {navigate('/gameboard', {state: {level: level + 1}})}}> */}
      
      <button className="startBtn2" onClick={() => {setLevelcounter3(prev => prev + 1); navigate('/gameboard') }}>
      {/* <button className="startBtn2"> */}
        Play Next
      </button>
      {/* </Link> */}

      <div className="styleResult">
        Your Score: <b>{state?.moves+1}</b> moves!
      </div>

      <div className="styleResult2">
        Your Time: <b>{formatTime(state?.time)}</b>
      </div>

      {/* <div className="styleResult2">
        Your Level: <b>{state?.setLevelcounter(levelcounter++)}</b>
      </div> */}

    </div>
  )
}


export default Nextboard