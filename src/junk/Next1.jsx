import React from 'react'
import { Link } from 'react-router-dom';
// import PlayFruits from './gameboards/PlayFruits';
import {useLocation} from "react-router-dom"
import { useState } from 'react';




const Next1 = () => {

    const {state} = useLocation();

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

      <Link to="/gameboard">
      <button className="backToStartBtn">
        Repeat
      </button>
      </Link>

      <Link to="/playmoods">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

      <div className="styleResult">
        Your Score: <b>{state?.moves+1}</b> moves!
      </div>

      <div className="styleResult2">
        Your Time: <b>{formatTime(state?.time)}</b>
      </div>

    </div>
  )
}

export default Next1