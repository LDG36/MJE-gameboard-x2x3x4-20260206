import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Header from './components/Header';
import Footer from './components/Footer';
// import Game from './gameboards/PlayFruits';
import About from './pages/About';
import FunFacts from './pages/FunFacts';

// import PlayFruits from './junk/PlayFruits';
// import PlayMoods from './junk/PlayMoods';
// import PlayVegetables from './junk/PlayVegetables';
// import PlayTransport from './junk/PlayTransport';
// import PlayNumbers from './junk/PlayNumbers';
// import PlayHomeware from './junk/PlayHomeware';
// import PlayActions from './junk/PlayActions';
// import PlayFruits2 from './junk/PlayFruits2';

import Gameboard from './gameboards/Gameboard';
import Nextboard from './gameboards/Nextboard';

// import Next1 from './junk/Next1';
// import Next2 from './junk/Next2';
// import Next3 from './junk/Next3';
// import Next4 from './junk/Next4';
// import Next5 from './junk/Next5';
// import Next6 from './junk/Next6';

import Finish from './gameboards/Finish';

{/* <Link to="/about">Go to About</Link> */}

import Gameboard_x2 from './gameboards/Gameboard_x2';
import Nextboard_x2 from './gameboards/Nextboard_x2';
import Gameboard_x3 from './gameboards/Gameboard_x3';
import Nextboard_x3 from './gameboards/Nextboard_x3';
import Gameboard_x4 from './gameboards/Gameboard_x4';
import Nextboard_x4 from './gameboards/Nextboard_x4';

import Selection from './gameboards/Selection';

function App() {
  // const [count, setCount] = useState(0);
  

  //added on 20260205 for About.jsx Quick Access
  const [levelcounter3, setLevelcounter3] = useState(0);
  //global states help to keep info regardless of component or pages you are on
  const [selectedLangs, setSelectedLangs] = useState([]);
  const [modeOfTheBoard, setModeOfTheBoard] = useState(24);

  
  return (
    <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home  levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3} 
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs}
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />

        <Route path="/settings" element={<Settings levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3} 
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs}
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />

        <Route path="/funfacts" element={<FunFacts />} />
        {/* <Route path="/game" element={<Game />} /> */}

        <Route path="/about" element={<About levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs}
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />

        {/* <Route path="/playfruits" element={<PlayFruits />} /> */}
        {/* <Route path="/playfruits2" element={<PlayFruits2 />} /> */}
        {/* <Route path="/playmoods" element={<PlayMoods />} />
        <Route path="/playvegetables" element={<PlayVegetables />} />
        <Route path="/playtransport" element={<PlayTransport />} />
        <Route path="/playnumbers" element={<PlayNumbers />} />
        <Route path="/playhomeware" element={<PlayHomeware />} />
        <Route path="/playactions" element={<PlayActions />} /> */}

{/*      //OLD
        <Route path="/gameboard" element={<Gameboard levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}/>} />
        <Route path="/nextboard" element={<Nextboard levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3} />} /> */}

        <Route path="/gameboard_x2" element={<Gameboard_x2 levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs}
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>}/>
        <Route path="/nextboard_x2" element={<Nextboard_x2 levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs} 
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />
        <Route path="/gameboard_x3" element={<Gameboard_x3 levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs}
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>}/>
        <Route path="/nextboard_x3" element={<Nextboard_x3 levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs} 
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />
        <Route path="/gameboard_x4" element={<Gameboard_x4 levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs}
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>}/>
        <Route path="/nextboard_x4" element={<Nextboard_x4 levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs} 
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />

        {/* <Route path="/next1" element={<Next1 />} />
        <Route path="/next2" element={<Next2 />} />
        <Route path="/next3" element={<Next3 />} />
        <Route path="/next4" element={<Next4 />} />
        <Route path="/next5" element={<Next5 />} />
        <Route path="/next6" element={<Next6 />} /> */}

        <Route path="/finish" element={<Finish levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
        selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs} 
         modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />

        <Route path="/selection" element={<Selection levelcounter3={levelcounter3} setLevelcounter3={setLevelcounter3}
         selectedLangs={selectedLangs} setSelectedLangs={setSelectedLangs}
          modeOfTheBoard={modeOfTheBoard} setModeOfTheBoard={setModeOfTheBoard}/>} />
      </Routes>
    </div>
    <Footer />
    </>

  )
}

export default App
