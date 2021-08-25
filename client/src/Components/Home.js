import React from 'react'
import {useState, useEffect } from 'react'
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

function Home() {
  let history = useHistory();

    const [popular, setPopular] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [trending, setTrending] = useState([])
    const [popularTrailer, setPopularTrailer] = useState("")
    const [path, setPath] = useState(localStorage.getItem('movieID'))
    const [key, setKey] = useState("")
    const [movieID, setMovieID] = useState("")

    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };
    function handleClick(movie){
      console.log(movie)
      localStorage.setItem('movieData',JSON.stringify(movie))
      history.push('/movie')
    }

    useEffect(() => {
        // `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        async function fetchPopular(){        
             const API = "https://api.themoviedb.org/3/movie/popular?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US&page=1"
              const result = await fetch(API);
              const items = await result.json();
              setPopular(items.results)
            }
            fetchPopular()
            
          }, [])
    function viewTrailer(movieID){
      console.log(movieID)
      let key;
      const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56`
      fetch(url)
      .then(res => res.json())
      .then((data) => localStorage.setItem("movieID", (data.results[0].key)))
  
      setPopularTrailer(`https://www.youtube.com/embed/${path}`)
    }

    const popularRow = popular.map(item => {
    return <div onClick={() => handleClick(item)} >
        <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
         </div>
       
    })

    useEffect(() => {
      async function fetchTrending(){
        const result = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=dfb1cba31ae6f1dda39d14acaa225d56");
        const items = await result.json();
        setTrending(items.results)
        viewTrailer(items.results[0].id)

      }
      fetchTrending()
      
    }, [])
    const trendingRow = trending.map(item => {
      return <div onClick={() => handleClick(item)}  class="col mb-1">
          <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
      </div>
    })
   useEffect(() => {
        async function fetchNowPlaying(){      
          // https://api.themoviedb.org/3/discover/movie?api_key=dfb1cba31ae6f1dda39d14acaa225d56&with_people=will_smith
             const API = "https://api.themoviedb.org/3/movie/now_playing?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US&page=1"
              const result = await fetch(API);
              const items = await result.json();
              setNowPlaying(items.results)
            }
            fetchNowPlaying()
            
          }, [])
          const nowPlayingRow = nowPlaying.map(item => {
            return <div onClick={() => handleClick(item)} class="col mb-1">
                <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
            </div>
          })

    useEffect(() => {
        async function fetchUpcoming(){        
             const API = "https://api.themoviedb.org/3/movie/upcoming?api_key=dfb1cba31ae6f1dda39d14acaa225d56&language=en-US&page=1"
              const result = await fetch(API);
              const items = await result.json();
              setUpcoming(items.results)
            }
            fetchUpcoming()
          }, [])
          const upcomingRow = upcoming.map(item => {
            return <div onClick={() => handleClick(item)} class="col mb-1">
                <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
            </div>
          })
    return (
        <div className="homePage">
          {/* <div className="homePageHeader">
            <h1>Movie Addict</h1>
          </div> */}
          <ReactPlayer 
            className="mediaPlayer" 
            width="191vh" 
            height='70vh' 
            playing="true"
            muted
            loop
            url={popularTrailer} 
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }}}
              // fullscreen={true} 
              /> 
          <br/><br/>
          <h1 className="rowTitle">Most Popular</h1>
          <Slider {...settings}>
          {popularRow}
          </Slider>
          <br/>
          <h1 className="rowTitle">Trending</h1>
          <Slider {...settings}>
          {trendingRow}
          </Slider>      
          <br/>
          <h1 className="rowTitle">Now Playing</h1>
          <Slider {...settings}>
          {nowPlayingRow}
          </Slider>
          <br/>
          <h1 className="rowTitle">Upcoming Movies</h1>
          <Slider {...settings}>
          {upcomingRow}
          </Slider>
          <br/><br/><br/>
        </div>

    )
}

export default Home;
