import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='nav'>
          <Link>
            <img src={logo} alt="" width={50} height={50}/>
          </Link>
          <div>
            <Link to={'/'} className='nav_link'>
              <p>Home</p>
            </Link>
            <Link to={'/contact'} className='nav_link'>
              <p>Contact</p>
            </Link>              
          </div>
        </div>
    </>
  )
}

export default Navbar