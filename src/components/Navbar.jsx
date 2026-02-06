import React from 'react'
import logoVersion3 from '../assets/logoVersion3.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className="logoItem">
            <Link to='/'><img src={logoVersion3} alt="MJE logo image" /></Link>
        </div>
        <div className="menuItems">
            <ul>
                <Link to='/'><li className="liHome">Home</li></Link>
                <Link to='/funfacts'><li className="liGame">Fun Facts</li></Link>
                <Link to='/settings'><li className="liSettings">Settings</li></Link>
                <Link to='/about'><li className="liAbout">About</li></Link>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar