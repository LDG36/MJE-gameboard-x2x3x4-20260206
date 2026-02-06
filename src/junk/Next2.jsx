import React from 'react'
import { Link } from 'react-router-dom';


const Next2 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/playmoods">
      <button className="backToStartBtn">
        Repeat
      </button>
      </Link>

        <Link to="/playvegetables">
      <button className="startBtn2">
        Play Next
      </button>
      </Link>

    </div>
  )
}

export default Next2