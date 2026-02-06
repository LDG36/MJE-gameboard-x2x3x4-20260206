import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const PlayFruits = () => 
{

      const navigate = useNavigate();


      const bottomRef = useRef(null);
      useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, []);



      const [items, setItems] = useState([
          {id:1, text:'jabłko', icon:'🍎', stat: "", sound:'jablko.mp3', lang:'PL' },
          {id:1, text:'an apple', icon:'🍎', stat: "", sound:'apple.mp3', lang:'EN' },
          {id:1, text:'una manzana', icon:'🍎', stat: "", sound:'manzana.mp3', lang:'ES'  },
          {id:2, text:'pomarańcze', icon:'🍊', stat: "", sound:'pomarancze.mp3', lang:'PL'   },

          {id:2, text:'an orange', icon:'🍊', stat: "", sound:'orange.mp3', lang:'EN'   },
          {id:2, text:'una naranja', icon:'🍊', stat: "", sound:'naranjas.mp3', lang:'ES'  },
          {id:3, text:'cytryna', icon:'🍋', stat: "", sound:'cytryna.mp3', lang:'PL'   },
          {id:3, text:'a lemon', icon:'🍋', stat: "", sound:'lemon.mp3', lang:'EN'   },

          {id:3, text:'un limón', icon:'🍋', stat: "", sound:'limon.mp3', lang:'ES'  },
          {id:4, text:'truskawka', icon:'🍓', stat: "", sound:'truskawka.mp3', lang:'PL'   },
          {id:4, text:'a strawberry', icon:'🍓', stat: "", sound:'strawberry.mp3', lang:'EN'   },
          {id:4, text:'una fresa', icon:'🍓', stat: "", sound:'fresa.mp3', lang:'ES'  },

          {id:5, text:'winogrona', icon:'🍇', stat: "", sound:'winogrona.mp3', lang:'PL'   },
          {id:5, text:'a grape', icon:'🍇', stat: "", sound:'grapes.mp3', lang:'EN'   },
          {id:5, text:'una uva', icon:'🍇', stat: "", sound:'uvas.mp3', lang:'ES'  },
          {id:6, text:'arbuz', icon:'🍉', stat: "", sound:'arbuz.mp3', lang:'PL'   },

          {id:6, text:'a watermelon', icon:'🍉', stat: "", sound:'watermelon.mp3', lang:'EN'   },
          {id:6, text:'una sandía', icon:'🍉', stat: "", sound:'sandia.mp3', lang:'ES'  },
          {id:7, text:'gruszka', icon:'🍐', stat: "", sound:'gruszka.mp3', lang:'PL'   },
          {id:7, text:'a pear', icon:'🍐', stat: "", sound:'pear.mp3', lang:'EN'   },

          {id:7, text:'una pera', icon:'🍐', stat: "", sound:'pera.mp3', lang:'ES'  },
          {id:8, text:'wiśnia', icon:'🍒', stat: "", sound:'wisnia.mp3', lang:'PL'   },
          {id:8, text:'a cherry', icon:'🍒', stat: "", sound:'cherry.mp3', lang:'EN'   },
          {id:8, text:'una cereza', icon:'🍒', stat: "", sound:'cereza.mp3', lang:'ES'  }

      ].sort(()=>Math.random()-0.5))


      function vanishCheck(id)
      {
          const statExist = items[id].stat.includes('vanish');
          return statExist;
      }
    
      const [prevprev, setPrevprev] = useState(-1);
      const [prev, setPrev] = useState(-2);
      const [disabled, setDisabled] = useState(false);
      const [moves, setMoves] = useState(0);

      //Timer related! ------------------------------------------------------
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


      function checkThree(current)
      {
          setDisabled(true);  

          if(items[current].id == items[prev].id && items[current].id == items[prevprev].id )
          {
            
            items[current].stat = "correct";
            items[prevprev].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items])            

            setTimeout(()=>{
              items[current].stat = "vanish"
              items[prevprev].stat = "vanish"
              items[prev].stat = "vanish"
              setPrev(-2),
              setPrevprev(-1)

              if (items.every(item => item.stat.includes("vanish"))) {
              navigate('/next1', {state: {moves, time} });
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
            setItems([...items])

            setTimeout(()=>{
                items[current].stat = ""
                items[prevprev].stat = ""
                items[prev].stat = ""
                setPrev(-2),
                setPrevprev(-1)
                setDisabled(false); 
            },3000)
          }
      }

      function handleClick(id){
            if((!vanishCheck(id))){
              if(prev == -2)
              {    
                items[id].stat = 'active'
                setItems([...items])
                setPrev(-1);
                setPrevprev(id);
                startTimer();
                
              }
              else if(prev == -1)
              {
                if(id === prevprev){return}

                items[id].stat = 'active'
                setItems([...items])
                setPrev(id);
                
              }
              else{

                if(id === prev || id === prevprev){return}

                setMoves(moves+1);
                //items[id].stat = 'card3'
                checkThree(id);
                
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

export default PlayFruits


