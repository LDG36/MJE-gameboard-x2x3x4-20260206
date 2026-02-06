import React from 'react'
import { Link } from 'react-router-dom';


const Next5 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/playnumbers">
      <button className="backToStartBtn">
        Repeat
      </button>
      </Link>

        <Link to="/playhomeware">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

    </div>
  )
}

export default Next5