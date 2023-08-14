import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
    <header>
        <div className="container flexSB">
            <nav className='flexSB'>
                <div className="logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <ul className='flexSB'>
                    <Link to ='/'>Home</Link>
                    <Link to ='/series'>Series</Link>
                    <Link to ='/mvies'>Movies</Link>
                    <Link to ='/pages'>Pages</Link>
                    <Link to ='/price'>Pricing</Link>
                    <Link to ='/contact'>Contact</Link>
                </ul>
                <button className='toggle'>
                <i className="fa-solid fa-bars"></i>
                </button>
            </nav>
            <div className="account flexSB">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user"></i>
            <button>Subcribe Now</button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header