import axios from 'axios'
import { useEffect, useState } from 'react'
import '../estilos/rows.css'

function Rows({ title, fetchUrl, isLarge }) {

  const base_url = "https://image.tmdb.org/t/p/original"

  //hacemos el llamado a la API y cada vez que hay un cambio en api se actualizará
  const [movies, setMovies] = useState([])


  useEffect(() => {
    const callApi = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    callApi()
  }, [fetchUrl])


  return (
    <div className='containerRows'>
      <h2>{title}</h2>
      <div className='posted'>
        {
          movies.map((movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <div className="slider" key={movie.id}>
                <img 
                    className={`poster ${isLarge ? "posterLarge" :""}`}
                    src={`${base_url}${isLarge ? movie.poster_path : movie?.backdrop_path}`}
                    alt={movie.original_title} onError={({ currentTarget }) => {
                      currentTarget.onerror = null // prevents looping
                      currentTarget.src = 'https://www.elcineenlasombra.com/wp-content/uploads/2018/10/pelicula-rodar-FB.jpg'

                    }} />
                    <div className='namePost'> 
                      <p>{movie?.title}</p> 
                    </div>
                
              </div>

            )
          )
        }
      </div>
    </div>
  )
}

export default Rows