import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movie from './Components/Movie'
import Search from './Components/Search'
import Trending from './Components/Trending'

function App() {
  // const [movieData, setMovieData] = useState([])
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/trending" component={Trending}/>
        <Route exact path="/search" component={Search}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
