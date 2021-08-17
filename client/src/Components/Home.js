import React from 'react'
import {useState, useEffect } from 'react'
import Slider from "react-slick";
// import MovieElement from './MovieElement'
import ReactPlayer from 'react-player';

function Home() {
    const [popular, setPopular] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [trending, setTrending] = useState([])
    const [popularTrailer, setPopularTrailer] = useState("")
    const [trendingTrailer, setTrendingTrailer] = useState("")
    const [upcomingTrailer, setUpcomingTrailer] = useState("")
    const [npTrailer, setNPTrailer] = useState("")
    const [path, setPath] = useState("")
    const [showPTrailer, setPShowTrailer] = useState(false)
    const [showUTrailer, setUShowTrailer] = useState(false)
    const [showTTrailer, setTShowTrailer] = useState(false)
    const [showNTrailer, setNShowTrailer] = useState(false)


    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };

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
    function viewPopTrailer(movieID){
      const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56`
      fetch(url)
      .then(res => res.json())
      .then((data) => setPath(data.results[1].key))
  
      setPopularTrailer(`https://www.youtube.com/embed/${path}`)
      setPShowTrailer(!showPTrailer)
    }
    function TrendingTrailer(movieID){
      const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56`
      fetch(url)
      .then(res => res.json())
      .then((data) => setPath(data.results[0].key))
  
      setTrendingTrailer(`https://www.youtube.com/embed/${path}`)
      setTShowTrailer(!showTTrailer)
    }
    function viewNPTrailer(movieID){
      const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56`
      fetch(url)
      .then(res => res.json())
      .then((data) => setPath(data.results[1].key))
  
      setNPTrailer(`https://www.youtube.com/embed/${path}`)
      setNShowTrailer(!showNTrailer)
    }
    function viewUpcomingTrailer(movieID){
      const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=dfb1cba31ae6f1dda39d14acaa225d56`
      fetch(url)
      .then(res => res.json())
      .then((data) => setPath(data.results[1].key))
  
      setUpcomingTrailer(`https://www.youtube.com/embed/${path}`)
      setUShowTrailer(!showUTrailer)
    }

    const popularRow = popular.map(item => {
    return <div onClick={() => viewPopTrailer(item.id)} className="card">
        <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
         </div>
       
    })

    useEffect(() => {
      async function fetchTrending(){
        const result = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=dfb1cba31ae6f1dda39d14acaa225d56");
        const items = await result.json();
        setTrending(items.results)
      }
      fetchTrending()
      
    }, [])
    const trendingRow = trending.map(item => {
      return <div onClick={() => TrendingTrailer(item.id)}  class="col mb-1">
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
            return <div onClick={() => viewNPTrailer(item.id)}  class="col mb-1">
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
            return <div onClick={() => viewUpcomingTrailer(item.id)}  class="col mb-1">
                <img className="popularImage" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" alt="..."/>
            </div>
          })
    return (
        <div className="homePage">
          <br/><br/>
          <h1 className="rowTitle">Most Popular</h1>
          <Slider {...settings}>
          {popularRow}
          </Slider>
          {showPTrailer ? 
          <ReactPlayer 
          className="mediaPlayer" 
          width="1080px" 
          height="480px" 
          controls 
          url={popularTrailer} />
        : null}
          <br/>
          <h1 className="rowTitle">Trending</h1>
          <Slider {...settings}>
          {trendingRow}
          </Slider>
          {showTTrailer ? 
          <ReactPlayer 
          className="mediaPlayer" 
          width="1080px" 
          height="480px" 
          controls 
          url={trendingTrailer} />
        : null}
          <br/>
          <h1 className="rowTitle">Now Playing</h1>
          <Slider {...settings}>
          {nowPlayingRow}
          </Slider>
          {showNTrailer ? 
          <ReactPlayer 
          className="mediaPlayer" 
          width="1080px" 
          height="480px" 
          controls 
          url={npTrailer} />
        : null}
          <br/>
          <h1 className="rowTitle">Upcoming Movies</h1>
          <Slider {...settings}>
          {upcomingRow}
          </Slider>
          {showUTrailer ? 
          <ReactPlayer 
          className="mediaPlayer" 
          width="1080px" 
          height="480px" 
          controls 
          url={upcomingTrailer} />
        : null}
        </div>

    )
}

export default Home
