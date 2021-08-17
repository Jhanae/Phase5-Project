import React from 'react'
import "./Navbar.css"
function Navigation({loggedIn}){
  function setLoggedIn(){
    localStorage.setItem('LoggedIn', false)
  }
  console.log(loggedIn)
    return (
      <nav>
        <a href="/" className="title">Watching Jay</a>
        { !loggedIn ?
        <div>
        <a href="/login" className="nav-details" onClick={() => setLoggedIn()}>Log out</a>
        <a href="/profile" className="nav-details">Profile</a> 
        </div> 
        : 
         <a href="/login" className="nav-details">Login</a> 
        }
        <a href="/search" className="nav-details">Search</a>
        <a href="/" className="nav-details">Movies</a>
      </nav>
    )
}
export default Navigation