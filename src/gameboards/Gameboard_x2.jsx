import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import levelsData from "../data/levelsTesting_x2.json";


//need to send props from App.jsx
const Gameboard_x2 = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    
    const bottomRef = useRef(null);
    useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const levelcounter = props.levelcounter3;

    const totalLevels = levelsData.length;    

    const [items, setItems] = useState([]);
    useEffect(() => {

      if (levelcounter >= totalLevels) {
      navigate("/finish", {state: {moves, time}});
      return;
      }

      const freshItems = levelsData[levelcounter]
        .map(item => ({ ...item })) // clone objects - recomended by Copilot
        .sort(() => Math.random() - 0.5); // shuffle
      setItems(freshItems);
    }, [levelcounter, totalLevels, navigate]);


          function vanishCheck(id)
          {
              const statExist = items[id].stat.includes('vanish');
              return statExist;
          }
        
        //   const [prevprev, setPrevprev] = useState(-1);
          const [prev, setPrev] = useState(-2);
          const [disabled, setDisabled] = useState(false);
          const [moves, setMoves] = useState(0);


          //Timer related! ------------------------------------------------------
          //---------------------------------------------
            const [time, setTime] = useState(0);        // seconds
            const [isRunning, setIsRunning] = useState(false);
            const timerRef = useRef(null);
            // Start the timer
            const startTimer = () => {
                if (timerRef.current) return; // prevent multiple intervals
        
                setIsRunning(true);
                timerRef.current = setInterval(() => {
                setTime(prev => prev + 10);
                }, 10);
            };
            // Stop the timer
            const stopTimer = () => {
                clearInterval(timerRef.current);
                timerRef.current = null;
                setIsRunning(false);
            };
            // Reset the timer
            const resetTimer = () => {
                stopTimer();
                setTime(0);
            };
            // Format time as MM:SS.mmm
            const formatTime = (ms) => {
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
          //Time related--------------------------------------------------------------

    
          function checkTwo(current)
          {
              setDisabled(true);  
    
              if(items[current].id == items[prev].id )
              {
                
                items[current].stat = "correct";
                items[prev].stat = "correct";
                setItems([...items])            
    
                setTimeout(()=>{
                  items[current].stat = "vanish";
                  items[prev].stat = "vanish";
                  setItems([...items]);
                  setPrev(-2);
    
                  //important code - level finish
                  if (items.every(item => item.stat.includes("vanish"))) {
                  navigate('/nextboard_x2', {state: {moves, time} });
                  stopTimer();
                  resetTimer();
                  }
    
                  setDisabled(false); 
                },2000)
              }
              else{
                items[current].stat = "wrong";
                items[prev].stat = "wrong";
                setItems([...items])
    
                setTimeout(()=>{
                    items[current].stat = ""
                    items[prev].stat = ""
                    setPrev(-2)
                    setDisabled(false)
                    setItems([...items]) 
                },3000)
              }
          }
    
          function handleClick(id){
                if((!vanishCheck(id))){
                  if(prev == -2)
                  {    
                    items[id].stat = 'active';
                    setItems([...items]);
                    setPrev(id);
                    startTimer();
                    
                  }
                  else{
    
                    if(id === prev){return}
                    setMoves(moves+1);
                    checkTwo(id);
                    
                  }
                }
          }
    



  return (
          <>
        <div className="gameContainer" ref={bottomRef}>
          {items.map((item, index) => (

            <Card 
            key={index} 
            item={item} 
            id={index} 
            handleClick={handleClick} 
            disabled={disabled}
            />

            ))}
        </div>
        <div className="styleMoves">
          Amount of Attempts: <b>{moves}</b> |  Time: <b>{formatTime(time)}</b>
        </div>

      </>
  )
}

export default Gameboard_x2