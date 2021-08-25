import React from 'react';
import './Profile.css';
import { useState, useEffect } from 'react'
import Slider from "react-slick";
import { useHistory } from 'react-router-dom';

// https://api.themoviedb.org/3/review/436969?api_key=dfb1cba31ae6f1dda39d14acaa225d56
function Profile() {
  let history = useHistory();

  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    const [favActor, setFavActor] = useState("")
    const [favPeriod, setFavPeriod] = useState("")
    const [favRegion, setFavRegion] = useState("")
    const [favGenre, setFavGenre] = useState(profile.fav_genre);
    const [username, setUsername] = useState("")
    const [genre, setGenre] = useState([])
    const [watched, setWatched] = useState([])
    const [showRecommendations, setShowRecommendations] = useState(false)
    const [showWatched, setShowWatched] = useState(false)
    const [movieID, setMovieID] = useState("")
    
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=dfb1cba31ae6f1dda39d14acaa225d56&with_genre=${favGenre}`
    async function getGenre(){
      const result = await fetch(API);
      const items = await result.json();
      setGenre(items.results)
      setShowRecommendations(!showRecommendations)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
    const genreRow = genre.map(item => {
        return <div class="col mb-1">
          <div className="">
            <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
          </div>
        </div>
      });
      useEffect(() => {
      async function getWatched(){
        const result = await fetch("http://localhost:3000/favorites");
        const items = await result.json();
        const filtered = items.filter(item => item.profile_id === profile.id)
        // console.log(filtered)
        filtered.map(item => {
          getMovie(item)
        })
      }
      getWatched()
    }, [])
      function getMovie(movie){
        fetch(`https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US`)
            .then(result => result.json())
            .then(data => {
              if(data !== watched)
              watched.push(data)
            })//if data !== watched
            .then(console.log(watched))
      }
      const watchedRow = watched.map(item => {
      return <div class="col mb-1">
        <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="..."/>
        </div>
    })
    return (
      <div className="profileContainer">
                <div className="profile row ">
                    <h1 className="" style={{color: '#fff'}}>Welcome {profile.username}!</h1>
                    <img className="profileImage col" src={profile.image} alt="..."/>
                    <table class="table profileData col">
                    <tbody>
                        <tr>
                        <th scope="col">Username: </th>
                        <td>{profile.username}</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                        <th scope="col">Favorite Actor: </th>
                        <td>{profile.fav_actor}</td>
                        </tr>
                        <tr>
                        <th scope="col">Favorite Genre: </th>
                        <td>{profile.fav_genre}</td>
                        </tr>
                        <tr>
                        <th scope="col">Favorite Region: </th>
                        <td>{profile.fav_region}</td>
                        </tr>
                    </tbody>
                </table>
                <div><br/>
                    <div className="row">
                    <button className="col" onClick={() => setShowWatched(!showWatched)}>Watched List</button>
                    {showWatched ? 
                        <div>
                        <h3 style={{color: '#fff', textAlign: 'left'}}>Watched Movies</h3> 
                        <Slider {...settings}> 
                        {watchedRow}
                        </Slider> 
                        </div>
                    : null}
                    <button className="col" onClick={() => getGenre()}>Recommendations</button>
                    {showRecommendations ? 
                    <div>
                        <h3 style={{color: '#fff', textAlign: 'left'}}>Favorite Genre: {favGenre}</h3>
                        <Slider {...settings}>
                        {genreRow}
                        </Slider>
                    </div>
                     : null}
                    </div>
                    <button onClick={() => history.push('/update-profile')} className="">Edit Profile</button>
                </div>
                </div>
            </div>
    )
}

export default Profile
