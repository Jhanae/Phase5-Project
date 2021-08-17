import React from 'react';
import './Profile.css';
import { useState, useEffect } from 'react'
import Slider from "react-slick";

// https://api.themoviedb.org/3/review/436969?api_key=dfb1cba31ae6f1dda39d14acaa225d56
function Profile({profile}) {
    console.log(profile);

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    const [favActor, setFavActor] = useState("")
    const [favPeriod, setFavPeriod] = useState("")
    const [favRegion, setFavRegion] = useState("")
    const [favGenre, setFavGenre] = useState("comedy")
    const [username, setUsername] = useState("")
    const [genre, setGenre] = useState([])
    const [showRecommendations, setShowRecommendations] = useState(false)
    
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


    return (
                <div className="profileContainer row ">
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
                    <button className="col">Watched</button>
                    <button className="col" onClick={() => getGenre()}>Recommendations</button>
                    {showRecommendations ? 
                    <div>
                        <h3 style={{color: '#fff', textAlign: 'left'}}>Favorite Genre: Comedy</h3>
                        <Slider {...settings}>
                        {genreRow}
                        </Slider>
                    </div>
                     : null}
                    </div>
                    <button className="col">Edit Profile</button>
                </div>
                </div>
    )
}

export default Profile
