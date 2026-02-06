import React from 'react'
import { useState } from 'react';
import Template from '../components/Template';
import { Link } from 'react-router-dom';
import LangTypes1 from '../components/LangTypes1';
import LangHowMany2 from '../components/LangHowMany2';
import NbOfTiles3 from '../components/NbOfTiles3';
import Category4 from '../components/Category4';
import Uncovered5 from '../components/Uncovered5';



const Settings = () => {


  return (
            
    <div className="settingsContainer">
      <h1 className="settingsHeading">Settings</h1>

      <div>
              
          <div className="formsSideBySide">
            <LangTypes1/>
          </div>
          <div className="formsSideBySide">
            <LangHowMany2/>
          </div>
          <div className="formsSideBySide">
            <NbOfTiles3/>
          </div>
          <div className="formsSideBySide">
            <Category4/>
          </div>
          <div className="formsSideBySide">
            <Uncovered5/>
          </div>
        
      </div>



{/* 

      <Link to="/game">
      <button className="startBtn">
        Play
      </button>
      </Link> */}

    </div>
  )
}





export default Settings