import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        // return an index, pull movie from array
        setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))]);
        return request;
    };
    fetchData()
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center",
        }}>
        <div className="banner_container">
            <div className="banner_title">
                <h2>{movie?.name || movie?.title || movie?.originalname}</h2>
            </div>
            <div className="banner_description">
                <p>{truncate(movie?.overview, 150)}</p>
            </div>
            <div>
                <button className="banner_btn">
                    <span>Play</span>
                </button>
                <button className="banner_btn">
                    <span>More Info</span>
                </button>
            </div>
        </div>

        <div className="banner_bottomfade" />

    </header>
  )
}

export default Banner;