import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../estilos/banner.css'
import requests from '../request'


function Banner() {
  const [movies, setMovies] = useState([])
    //llamado a endpoint
  useEffect(() => {
    const fetchData = async () =>{
      const request = await axios.get(requests.fetchNeflixOriginals)
      setMovies(
        request.data.results[Math.floor(Math.random()*request.data.results.length -1)] //creamos un indice para llamar aleatoria img
      )
      return request
    }
    fetchData()
  }, [])
  
  //funcion para cortar 
  const truncate = (text,n)=> text?.length > n ? `${text.substr(0,n-1)} ...` :text
  

  return (

    <>
      <div className='banner' style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`}}>
        <div className='infoBanner'>
            <h2>{movies.original_title}</h2>
            <p>{truncate(movies.overview ,160)}</p>
          <div className='buttonsBanner'>
            <button>Reproducir</button>
            <button>Información</button>
          </div>
        </div>
      </div>
      <div className="bannerGradent"></div>
     
    </>
  )
}

export default Banner