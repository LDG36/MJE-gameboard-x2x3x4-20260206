
import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const PlayMoods = () => {

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



    const [moods, setMoods] = useState([
        {id:1, text:'smutny', icon:'😢', stat: "" },
        {id:1, text:'sad', icon:'😢', stat: "" },
        {id:1, text:'triste', icon:'😢', stat: "" },
        {id:2, text:'szczęśliwy', icon:'😄', stat: "" },

        {id:2, text:'happy', icon:'😄', stat: "" },
        {id:2, text:'feliz', icon:'😄', stat: "" },
        {id:3, text:'znudzony', icon:'😐', stat: "" },
        {id:3, text:'bored', icon:'😐', stat: "" },

        {id:3, text:'aburrido', icon:'😐', stat: "" },
        {id:4, text:'zły', icon:'😠', stat: "" },
        {id:4, text:'angry', icon:'😠', stat: "" },
        {id:4, text:'enojado', icon:'😠', stat: "" },

        {id:5, text:'przestraszony', icon:'😱', stat: "" },
        {id:5, text:'scared', icon:'😱', stat: "" },
        {id:5, text:'asustado', icon:'😱', stat: "" },
        {id:6, text:'senny', icon:'😴', stat: "" },

        {id:6, text:'sleepy', icon:'😴', stat: "" },
        {id:6, text:'somnoliento', icon:'😴', stat: "" },
        {id:7, text:'zadowolony', icon:'😌', stat: "" },
        {id:7, text:'satisfied', icon:'😌', stat: "" },

        {id:7, text:'satisfecho', icon:'😌', stat: "" },
        {id:8, text:'szalony', icon:'🤪', stat: "" },
        {id:8, text:'crazy', icon:'🤪', stat: "" },
        {id:8, text:'loco', icon:'🤪', stat: "" }

    ].sort(()=>Math.random()-0.5))

    //20251015 whole journey: below // finally got it - I use state to check if button that I clicked has got a vanish class (true or false)!!!
    // the opacity check for disabling elements properly (recovery of tiles) 20251015 LDG
    //checking the condition to run the event - based on the fact that class vanish has always 0 opacity
    function vanishCheck(id)
    {
        //old version it searches vanish everywhere - therefore bloks the entire game if there is one vanish already
        // const statExist = moods.some(stat => stat.stat.includes('vanish'));
        const statExist = moods[id].stat.includes('vanish');
        // alert(statExist);
        return statExist;
        //mind it works also on the backgroud - a weird issue...
    }
    

    const [prevprev, setPrevprev] = useState(-1);
    const [prev, setPrev] = useState(-2);
    //this flag below if for preventing user to be able to click on more than 3 cards at the time => does not work at the moment!!!
    const [lock, setLock] = useState(false);
    // attmpt to fix a bug with clicking many times the same tile - not fixed
    // const [equalitiCheck1, setEqualityCheck1] = useState(true);
    // const [equalitiCheck2, setEqualityCheck2] = useState(true);
    // const [equalitiCheck3, setEqualityCheck3] = useState(true);

    // function checkTwo(current? prev?)

    function checkThree(current)
    {
        if(moods[current].id == moods[prev].id && moods[current].id == moods[prevprev].id )
        {
          moods[current].stat = "correct";
          moods[prevprev].stat = "correct";
          moods[prev].stat = "correct";
          setMoods([...moods]);
          // setPrev(-2);
          // setPrevprev(-1);
          

          setTimeout(()=>{

          // !!! MIND you are mutating the array directly !!!!!!!!!!!!!!!!!!!!! use setMoods !!!!!
          // setMoods(prev => prev.map(mood => mood.id === 1 ? { ...mood, stat: "vanish" } : mood ));
          moods[current].stat = "vanish"
          moods[prevprev].stat = "vanish"
          moods[prev].stat = "vanish"
          setMoods([...moods]);
          setPrev(-2),
          setPrevprev(-1)
          //console.log('success almost');
          // -----------> adding completion condition and redirecting to next gameboard
          // useEffect(() => {
          //   if (moods.every(mood => mood.stat.includes("vanish"))) {
          //     alert('success');
          //     navigate('/game');
          //   }
          // }, [moods]);
          // -----------> it works without useEffect - happy day - it is ok like that only inside of the function
          if (moods.every(mood => mood.stat.includes("vanish"))) {
          //alert('success'); 
          navigate('/next2');
          }

          },1000)
          setLock(false);



        }
        else{
          moods[current].stat = "wrong";
          moods[prevprev].stat = "wrong";
          moods[prev].stat = "wrong";
          setMoods([...moods])

          setTimeout(()=>{
              moods[current].stat = ""
              moods[prevprev].stat = ""
              moods[prev].stat = ""
              setMoods([...moods]);
              setPrev(-2),
              setPrevprev(-1)
          },1000)
          setLock(false);

        }
    }

    function handleClick(id){
    if((!vanishCheck(id)&&lock==false)){
          //&&(prev!=prevprev&&prev!=id)
          //&&(equalitiCheck1==equalitiCheck2&&equalitiCheck1==equalitiCheck3)
          //trying to blok the possibility to click on tile many times!!! - does not work yet
          setLock(true);
          if(prev == -2)
          {    
            moods[id].stat = 'active'
            setMoods([...moods])
            setPrev(-1);
            setPrevprev(id);
            setLock(false);
            setEqualitiCheck1(false);
          }
          else if(prev == -1)
          {
            moods[id].stat = 'active'
            setMoods([...moods])
            setPrev(id);
            setLock(false);
            setEqualitiCheck2(false);
          }
          else{
            checkThree(id);//mind uses "global" states
          }
        }
    }

  return (
    <>
      <div className="gameContainer" ref={bottomRef}>
        {moods.map((item, index) => (<Card key={index} item={item} id={index} handleClick={handleClick}/>))}
        {/* <div>PlayMoods</div> */}
      </div>
    </>
  )
}


export default PlayMoods