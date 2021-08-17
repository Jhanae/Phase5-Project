import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Components/Search'
import Trending from './Components/Trending'
import Login from './Components/Login'
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import EditProfile from './Components/EditProfile'

function App() {
  // const [movieData, setMovieData] = useState([])
  const [trending, setTrending] = useState([])
  const [trailer, setTrailer] = useState("")
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('LoggedIn'));
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));

  const API = "https://api.themoviedb.org/3/trending/all/day?api_key=dfb1cba31ae6f1dda39d14acaa225d56"
  useEffect(() => {
    async function fetchTrending(){
      const result = await fetch(API);
      const items = await result.json();
      setTrending(items.results)
    }
    fetchTrending()
  }, [])

  return (
    <div className="App">
      <Router>
      <Navbar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/trending" component={() => <Trending setTrailer={setTrailer} trailer={trailer} trending={trending}/>}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/login" component={() => <Login trending={trending[0]} setLoggedIn={setLoggedIn} loggedIn={loggedIn} profile={profile} setProfile={setProfile}/>}/>
        <Route exact path="/profile" component={() => <Profile profile={profile} />}/>
        <Route exact path="/signup" component={() => <Signup setLoggedIn={setLoggedIn} loggedIn={loggedIn} setProfile={setProfile}/>}/>
        <Route exact path="/update-profile" component={() => <EditProfile profile={profile}/>} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
