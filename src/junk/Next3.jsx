import React from 'react'
import { Link } from 'react-router-dom';


const Next3 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/playvegetables">
      <button className="backToStartBtn">
        Repeat
      </button>
      </Link>

        <Link to="/playtransport">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

    </div>
  )
}

export default Next3