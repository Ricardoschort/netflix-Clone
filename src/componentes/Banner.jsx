import React from 'react'
import '../estilos/banner.css'


function Banner() {
  return (
    <>
      <div className='banner'>
        <div className='infoBanner'>
            <h2>titulo de pelicula</h2>
            <h3>subtitulo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur ex ipsum, dignissimos qui quisquam odit laboriosam rerum, corporis exercitationem ratione laudantium dolor beatae. Reprehenderit molestias amet ipsam cumque laboriosam?</p>
          <div className='buttonsBanner'>
            <button>Reproducir</button>
            <button>Información</button>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Banner