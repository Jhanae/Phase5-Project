import React from 'react'
import "./Navbar.css"
import Logo from './Pictures/pngaaa.com-3675676 (1).png'
import { useState } from 'react'

function Navigation(){
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('LoggedIn')))

  console.log(loggedIn)
    return (
      <nav className=" navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="/search">Search</a>
        </li>
        { !loggedIn ?
        <li className="nav-item">
          <a className="nav-link" href="/">Login</a>
        </li>
        : 
        <div>
         <li className="nav-item">
          <a onClick={setLoggedIn(!loggedIn)} className="nav-link" href="/">Logout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Profile</a>
        </li>
        </div>
      }
      </ul>
      <img className="navImage" src={Logo} alt="..."/>
      <a className="navbar-brand NavTitle" href="/home">WatchingJay</a>
    </div>
  </div>
</nav>
    )
  }
  export default Navigation


  // <nav>
  //   <a href="/" className="title">Watching Jay</a>
  //   { !loggedIn ?
  //   <div>
  //   <a href="/login" className="nav-details" onClick={() => setLoggedIn()}>Log out</a>
  //   <a href="/profile" className="nav-details">Profile</a> 
  //   </div> 
  //   : 
  //    <a href="/login" className="nav-details">Login</a> 
  //   }
  //   <a href="/search" className="nav-details">Search</a>
  //   <a href="/" className="nav-details">Movies</a>
  // </nav>