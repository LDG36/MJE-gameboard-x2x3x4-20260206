import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//IF YOU WILL BE HERE AFTER SUBMITION - STRIP ALL BARE - AND START AGAIN

const Game = () => 
{

      const navigate = useNavigate();

      //scrolling to the bottom of the page - LDG - 20251017
      //   useEffect(() => {
      //   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      // }, []);
      //scrolling to the indicated element - unlike the above it is not to the bottom!!!
      //works if there is no content below - but misbehaves when there is eg: justifyies vertically!!!
      //works in cases when new tab clicked not on the refresh!!!
      const bottomRef = useRef(null);
      useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, []);



      const [items, setItems] = useState([
          {id:1, text:'samochód', icon:'🚗', stat: "", sound:'.mp3' },
          {id:1, text:'a car', icon:'🚗', stat: "", sound:'.mp3' },
          {id:1, text:'un coche', icon:'🚗', stat: "", sound:'.mp3'  },
          {id:2, text:'samolot', icon:'✈️', stat: "", sound:'.mp3'  },

          {id:2, text:'a plane', icon:'✈️', stat: "", sound:'.mp3'  },
          {id:2, text:'un avión', icon:'✈️', stat: "", sound:'.mp3'  },
          {id:3, text:'statek', icon:'🚢', stat: "", sound:'.mp3'  },
          {id:3, text:'a ship', icon:'🚢', stat: "", sound:'.mp3'  },

          {id:3, text:'un barco', icon:'🚢', stat: "", sound:'.mp3'  },
          {id:4, text:'pociąg', icon:'🚆', stat: "", sound:'.mp3'  },
          {id:4, text:'a train', icon:'🚆', stat: "", sound:'.mp3'  },
          {id:4, text:'un tren', icon:'🚆', stat: "", sound:'.mp3'  },

          {id:5, text:'rower', icon:'🚲', stat: "", sound:'.mp3'  },
          {id:5, text:'a bicycle', icon:'🚲', stat: "", sound:'.mp3'  },
          {id:5, text:'una bicicleta', icon:'🚲', stat: "", sound:'.mp3'  },
          {id:6, text:'śmigłowiec', icon:'🚁', stat: "", sound:'.mp3'  },

          {id:6, text:'a helicopter', icon:'🚁', stat: "", sound:'.mp3'  },
          {id:6, text:'un helicóptero', icon:'🚁', stat: "", sound:'.mp3'  },
          {id:7, text:'autobus', icon:'🚍', stat: "", sound:'.mp3'  },
          {id:7, text:'a bus', icon:'🚍', stat: "", sound:'.mp3'  },

          {id:7, text:'un autobús', icon:'🚍', stat: "", sound:'.mp3'  },
          {id:8, text:'motor', icon:'🛵', stat: "", sound:'.mp3'  },
          {id:8, text:'a motorbike', icon:'🛵', stat: "", sound:'.mp3'  },
          {id:8, text:'una motocicleta', icon:'🛵', stat: "", sound:'.mp3'  }

      ].sort(()=>Math.random()-0.5))

      //20251015 whole journey: below // finally got it - I use state to check if button that I clicked has got a vanish class (true or false)!!!
      // the opacity check for disabling elements properly (recovery of tiles) 20251015 LDG
      //checking the condition to run the event - based on the fact that class vanish has always 0 opacity
      function vanishCheck(id)
      {
          //old version it searches vanish everywhere - therefore bloks the entire game if there is one vanish already
          // const statExist = items.some(stat => stat.stat.includes('vanish'));
          const statExist = items[id].stat.includes('vanish');
          // alert(statExist);
          return statExist;
          //mind it works also on the backgroud - a weird issue...
      }
    

      const [prevprev, setPrevprev] = useState(-1);
      const [prev, setPrev] = useState(-2);
      //this flag below if for preventing user to be able to click on more than 3 cards at the time => does not work at the moment!!!
      // const [lock, setLock] = useState(false);
      //trying the same approach but without the state:
      var lock = false;
      // console.log(lock);
      // attmpt to fix a bug with clicking many times the same tile - not fixed
      // const [equalitiCheck1, setEqualityCheck1] = useState(true);
      // const [equalitiCheck2, setEqualityCheck2] = useState(true);
      // const [equalitiCheck3, setEqualityCheck3] = useState(true);

      function passCheck(id)
      {
          const pass1 = items[id].stat.includes('card1');
          const pass2 = items[id].stat.includes('card2');
          const pass3 = items[id].stat.includes('card3');

          if(pass1==true && pass2==true)
          {
              return true;
          }
          else
          {
              return false;
          }
      }

      // function checkTwo(current? prev?)

      function checkThree(current)
      {
          if(items[current].id == items[prev].id && items[current].id == items[prevprev].id )
          {
            items[current].stat = "correct";
            items[prevprev].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items])
            // setPrev(-2);
            // setPrevprev(-1);
            

            setTimeout(()=>{
            items[current].stat = "vanish"
            items[prevprev].stat = "vanish"
            items[prev].stat = "vanish"
            setPrev(-2),
            setPrevprev(-1)

            if (items.every(item => item.stat.includes("vanish"))) {
            //alert('success'); 
            navigate('/next4');}
          
            },1000)
            // setLock(false);
            lock = false;
            console.log(lock);
          


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
            },1000)
            // setLock(false);
            lock = false;
            console.log(lock);
            

          }
      }

      function handleClick(id){
      if((!vanishCheck(id)&&(!lock)&&(!passCheck(id)))){
            //&&(prev!=prevprev&&prev!=id)
            //&&(equalitiCheck1==equalitiCheck2&&equalitiCheck1==equalitiCheck3)
            //trying to blok the possibility to click on tile many times!!! - does not work yet
            // setLock(true);
            lock = true;
            console.log(lock);
            if(prev == -2)
            {    
              items[id].stat = 'active card1'
              setItems([...items])
              setPrev(-1);
              setPrevprev(id);
              // setLock(false);
              lock = false;
              console.log(lock);
              // setEqualitiCheck1(false);
            }
            else if(prev == -1)
            {
              items[id].stat = 'active card2'
              setItems([...items])
              setPrev(id);
              // setLock(false);
              lock = false;
              console.log(lock);
              // setEqualitiCheck2(false);
            }
            else{
              items[id].stat = 'card3'
              lock=true;
              checkThree(id);//mind uses "global" states
              console.log(lock);
              //commented 20251110 dont remember previous purpose
              //alert(passCheck(id));
            }
          }
      }

    return (
      <>
        <div className="gameContainer" ref={bottomRef}>
          {items.map((item, index) => (<Card key={index} item={item} id={index} handleClick={handleClick}/>))}
        </div>
      </>
    )
}

export default Game











// language API with unicode signs for coresponding unicode icons
// it could be useful later so I save it here (LDG 20251013)
// ----------------------------------------------------

   //for later: apple U+1F34E orange U+1F34A strawberry U+1F353 lemon U+1F34B
    //  grape U+1F347 watermelon U+1F349 cherry U+1F352 pear U+1F350


        // {id:1, text:'jabłko', icon:'U+1F34E', stat: "" },
        // {id:1, text:'apple', icon:'U+1F34E', stat: "" },
        // {id:1, text:'manzana', icon:'U+1F34E', stat: "" },
        // {id:2, text:'pomarańcze', icon:'U+1F34A', stat: "" },

        // {id:2, text:'orange', icon:'U+1F34A', stat: "" },
        // {id:2, text:'naranjas', icon:'U+1F34A', stat: "" },
        // {id:3, text:'cytryna', icon:'U+1F34B', stat: "" },
        // {id:3, text:'lemon', icon:'U+1F34B', stat: "" },

        // {id:3, text:'limón', icon:'U+1F34B', stat: "" },
        // {id:4, text:'truskawka', icon:'U+1F353', stat: "" },
        // {id:4, text:'strawberry', icon:'U+1F353', stat: "" },
        // {id:4, text:'fresa', icon:'U+1F353', stat: "" },

        // {id:5, text:'winogrona', icon:'U+1F347', stat: "" },
        // {id:5, text:'grape', icon:'U+1F347', stat: "" },
        // {id:5, text:'uvas', icon:'U+1F347', stat: "" },
        // {id:6, text:'arbuz', icon:'U+1F349', stat: "" },

        // {id:6, text:'watermelon', icon:'U+1F349', stat: "" },
        // {id:6, text:'sandía', icon:'U+1F349', stat: "" },
        // {id:7, text:'gruszka', icon:'U+1F350', stat: "" },
        // {id:7, text:'pear', icon:'U+1F350', stat: "" },

        // {id:7, text:'pera', icon:'U+1F350', stat: "" },
        // {id:8, text:'wiśnia', icon:'U+1F352', stat: "" },
        // {id:8, text:'cherry', icon:'U+1F352', stat: "" },
        // {id:8, text:'cereza', icon:'U+1F352', stat: "" }


// ----------------------------------------------------


    // const [moods, setMoods] = useState([
    //     {id:1, text:'smutny', icon:'😢', stat: "" },
    //     {id:1, text:'sad', icon:'😢', stat: "" },
    //     {id:1, text:'triste', icon:'😢', stat: "" },
    //     {id:2, text:'szczęśliwy', icon:'😄', stat: "" },

    //     {id:2, text:'happy', icon:'😄', stat: "" },
    //     {id:2, text:'feliz', icon:'😄', stat: "" },
    //     {id:3, text:'znudzony', icon:'😐', stat: "" },
    //     {id:3, text:'bored', icon:'😐', stat: "" },

    //     {id:3, text:'aburrido', icon:'😐', stat: "" },
    //     {id:4, text:'zły', icon:'😠', stat: "" },
    //     {id:4, text:'angry', icon:'😠', stat: "" },
    //     {id:4, text:'enojado', icon:'😠', stat: "" },

    //     {id:5, text:'przestraszony', icon:'😱', stat: "" },
    //     {id:5, text:'scared', icon:'😱', stat: "" },
    //     {id:5, text:'asustado', icon:'😱', stat: "" },
    //     {id:6, text:'senny', icon:'😴', stat: "" },

    //     {id:6, text:'sleepy', icon:'😴', stat: "" },
    //     {id:6, text:'somnoliento', icon:'😴', stat: "" },
    //     {id:7, text:'zadowolony', icon:'😌', stat: "" },
    //     {id:7, text:'satisfied', icon:'😌', stat: "" },

    //     {id:7, text:'satisfecho', icon:'😌', stat: "" },
    //     {id:8, text:'szalony', icon:'🤪', stat: "" },
    //     {id:8, text:'crazy', icon:'🤪', stat: "" },
    //     {id:8, text:'loco', icon:'🤪', stat: "" }

    // ].sort(()=>Math.random()-0.5))


