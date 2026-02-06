import React from 'react'
import { Link } from 'react-router-dom';


const Next6 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/playhomeware">
      <button className="backToStartBtn">
        Repeat
      </button>
      </Link>

        <Link to="/playactions">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

    </div>
  )
}

export default Next6