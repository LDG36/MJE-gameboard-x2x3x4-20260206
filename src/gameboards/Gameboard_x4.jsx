import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import levelsData from "../data/levelsTesting_x4.json";
import levelsData from "../data/levels_x18.json";

//need to send props from App.jsx
const Gameboard_x4 = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    
    const bottomRef = useRef(null);
    useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const levelcounter = props.levelcounter3;
    const selectedLangs = props.selectedLangs;
    const  modeOfTheBoard = props.modeOfTheBoard;
    // const levelcounter = props.levelcounter3 ?? state?.levelcounter3 ?? 0;
    // const selectedLangs = props.selectedLangs ?? state?.selectedLangs ?? ["english", "polish", "spanish", "german"];
    // const modeOfTheBoard = props.modeOfTheBoard ?? state?.modeOfTheBoard ?? 36;

    //THis is important because solution may have bugs -> test it in a console!!!
    // console.log("props:", props);
    // console.log("state:", state);


    //4xSOLUTIONS:
    //const totalLevels = levelsData.length;
    const firstLang = Object.keys(levelsData)[0];
    const totalLevels = Object.keys(levelsData[firstLang]).length;
    // const getTotalLevels = () => {
    //   const firstLang = Object.keys(levelsData)[0];
    //   return Object.keys(levelsData[firstLang]).length;
    // };
    const getTotalLevels = () => {
      const firstLang = Object.keys(levelsData || {})[0];
      return firstLang
        ? Object.keys(levelsData[firstLang] || {}).length
        : 0;
    };


    const [items, setItems] = useState([]);


    //generating mixed limited lang but according to id's
    const generateMultilingualLevel = (languages, levelcounter, limitPerLanguage) => {
      const ids = levelsData[languages[0]][levelcounter].map(item => item.id);
      const shuffledIds = [...ids].sort(() => Math.random() - 0.5);
      const selectedIds = shuffledIds.slice(0, limitPerLanguage);
      const combined = languages.flatMap(lang => {
        const items = levelsData[lang][levelcounter];
        const limited = items.filter(item => selectedIds.includes(item.id));
        return limited.map(item => ({
          ...item, lang
        }));
      });
      return combined.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {

      if (levelcounter >= getTotalLevels()) {
      navigate("/finish", {state: {moves, time}});
      return;
      }

      //const freshItems = generateMultilingualLevel(["english", "spanish", "polish", "french"],levelcounter,6);
      //const freshItems = generateMultilingualLevel(state?.selected ,levelcounter, (state?.mode/4));
      const freshItems = generateMultilingualLevel(selectedLangs ,levelcounter, (modeOfTheBoard/4));
      setItems(freshItems);
      // const freshItems = levelsData[levelcounter]
      //   .map(item => ({ ...item })) // clone objects - recomended by Copilot
      //   .sort(() => Math.random() - 0.5); // shuffle
      // setItems(freshItems);
    }, [levelcounter, totalLevels, navigate]);


          function vanishCheck(id)
          {
              const statExist = items[id].stat.includes('vanish');
              return statExist;
          }
        
          const [prevprevprev, setPrevprevprev] = useState(-1);
          const [prevprev, setPrevprev] = useState(-2);
          const [prev, setPrev] = useState(-3);
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

    
          function checkFour(current)
          {
              setDisabled(true);  
    
              if(items[current].id == items[prev].id && items[current].id == items[prevprev].id && items[current].id == items[prevprevprev].id )
              {
                
                items[current].stat = "correct";
                items[prevprev].stat = "correct";
                items[prev].stat = "correct";
                items[prevprevprev].stat = "correct";
                setItems([...items])            
    
                setTimeout(()=>{
                  items[current].stat = "vanish"
                  items[prevprev].stat = "vanish"
                  items[prev].stat = "vanish"
                  items[prevprevprev].stat = "vanish"
                  setItems([...items])
                  setPrev(-3)
                  setPrevprev(-2)
                  setPrevprevprev(-1)
    
                  //important code - level finish
                  if (items.every(item => item.stat.includes("vanish"))) {
                  navigate('/nextboard_x4', {state: {moves, time} });
                  stopTimer();
                  resetTimer();
                  }
    
                  setDisabled(false); 
                },2000)
              }
              else{
                items[current].stat = "wrong";
                items[prevprev].stat = "wrong";
                items[prev].stat = "wrong";
                items[prevprevprev].stat = "wrong"
                setItems([...items])
    
                setTimeout(()=>{
                    items[current].stat = ""
                    items[prevprev].stat = ""
                    items[prev].stat = ""
                    items[prevprevprev].stat = ""
                    setItems([...items])
                    setPrev(-3)
                    setPrevprev(-2)
                    setPrevprevprev(-1)
                    setDisabled(false); 
                },3000)
              }
          }
    

          function handleClick(id){
                if((!vanishCheck(id))){
                  if(prev == -3)
                  {    
                    items[id].stat = 'active'
                    setItems([...items])
                    setPrev(-2);
                    setPrevprev(-1);
                    setPrevprevprev(id);
                    startTimer();
                    
                  }
                  else if(prev == -2)
                  {
                    if(id === prevprevprev){return}
    
                    items[id].stat = 'active'
                    setItems([...items])
                    setPrev(-1);
                    setPrevprev(id);
                    
                  }
                  else if(prev == -1)
                  {

                    if(id === prevprev || id === prevprevprev){return}
    
                    items[id].stat = 'active'
                    setItems([...items])
                    setPrev(id);

                  }
                  else{
    
                    if(id === prev || id === prevprev || id === prevprevprev ){return}
    
                    setMoves(moves+1);
                    //items[id].stat = 'card3'
                    checkFour(id);
                    
                  }
                }
          }
    



  return (
          <>


        <div className={{
              12: "gameContainer_12",
              24: "gameContainer",
              36: "gameContainer_36",
            }[modeOfTheBoard] || ""}
            ref={bottomRef}>

        {/* <div className="gameContainer" ref={bottomRef}> */}
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

export default Gameboard_x4