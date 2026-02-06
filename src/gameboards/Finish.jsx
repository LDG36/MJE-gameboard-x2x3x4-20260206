import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom"
import { useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Finish = ({ levelcounter3, setLevelcounter3 }) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    // const {moves, time, levelcounter} = state;
    // const originalLevel = state?.levelcounter;
    // const [levelcounter2, setLevelcounter2] = useState(originalLevel);

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

      {/* <Link to="/"> */}
      <button className="backToStartBtn"  onClick={() => {setLevelcounter3(0); navigate('/') }}>
        Completed - Back to Start
      </button>
      {/* </Link> */}

      {/* This does not work at the moment because game flow is from /nextboard to /finish
       - not from /gameboard to /finish ! */}
      {/* <div className="styleResult">
        Your Score: <b>{state?.moves+1}</b> moves!
      </div>

      <div className="styleResult2">
        Your Time: <b>{formatTime(state?.time)}</b>
      </div> */}

    </div>
  )
}

export default Finish