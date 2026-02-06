import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom"
import { useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Home = ({ levelcounter3, setLevelcounter3 }) => {

    const navigate = useNavigate();
    const {state} = useLocation();

  return (
    <>
    <article className="settingsContainer" >
        <h1 className="landingHeader">Play & Learn Languages Faster</h1>
        <div className="stylePara">


            <div className="funContainer">
                <p className="redFont"> 
                This is another example of MJE web app by Lukasz Galik. 
                This instance proves that it is possible to fix some 
                logical errors related to the game mechanics. This 
                solution is being addapted as part of a Portfolio.
                {/*                 
                It also 
                adjust this piece of software to mobile view.
                On top of that Timer and a Score count are added. */}
                
                   
                </p>
            </div> 
            {/* 
            <p className="MJEdescription">MJE stands for MahJong Europa. It is a website that promotes alternative approach to learn 
                languages through gamification. MJE is a test approach created by Lukasz Galik - Edinburgh 
                Napier University student as part of the course. MahJong Europa will allow you to learn 
                most popular foreign languages and get enough vocabulary to achieve A2 level of language 
                comprehantion. The strength of MJE is that you can learn three languages at once. Thank you 
                for visiting this site and have fun.
            </p> */}
        </div>
        {/* <Link to='/gameboard'> */}
            <button className="startBtn" onClick={() => {setLevelcounter3(0); navigate('/gameboard') }}>
                Start
            </button>
        {/* </Link> */}
    </article>
    </>
  )
}

export default Home