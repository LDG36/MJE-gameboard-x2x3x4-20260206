import React from 'react'
import { Link } from 'react-router-dom';


const Next4 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/playtransport">
      <button className="backToStartBtn">
        Repeat
      </button>
      </Link>

        <Link to="/playnumbers">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

    </div>
  )
}

export default Next4