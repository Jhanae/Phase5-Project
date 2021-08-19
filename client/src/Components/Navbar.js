import React from 'react'
import "./Navbar.css"
import Logo from './Pictures/pngaaa.com-3675676 (1).png'

function Navigation({loggedIn}){
  function setLoggedIn(){
    localStorage.setItem('LoggedIn', false)
  }
  console.log(loggedIn)
    return (
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
      <nav className=" navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={{"color":"white"}} className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a style={{"color":"white"}} className="nav-link" href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a style={{"color":"white"}} className="nav-link" href="/login">Login</a>
        </li>
      </ul>
      <span style={{"color":"white"}} className="navbar-text">
      <img className="navImage" src={Logo} alt="..."/>
      <a style={{"color":"white"}} className="navbar-brand NavTitle" href="#">WatchingJay</a>
      </span>
    </div>
  </div>
</nav>
    )
}
export default Navigation