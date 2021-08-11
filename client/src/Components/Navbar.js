import React from 'react'
import "./Navbar.css"
function Navigation(){


    return (
      <nav>
        <a href="/" className="title">Watching Jay</a>
        <button href="/" className="nav-btn">Signup</button>
        <a href="/" className="nav-details">Login</a>
        <a href="/trending" className="nav-details">Trending</a>
        <a href="/" className="nav-details">Movies</a>
      </nav>
    )
}
export default Navigation