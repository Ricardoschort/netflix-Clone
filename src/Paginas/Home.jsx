import React from 'react'
import Banner from '../componentes/Banner'
import Header from '../componentes/Header'
import Rows from '../componentes/Rows'
import '../estilos/home.css'
import requests from '../request'
function Home() {
  return (
    <div className="homeContainer">
      <Header/>
      <Banner/>
      <article>
          <Rows title ={"Tendencias"}  fetchUrl={requests.fetchToRaded} isLarge />
          <Rows title ={"Populares de netflix"} fetchUrl={requests.fetchNeflixOriginals}/>
          <Rows title ={"Pronto a salir"} fetchUrl={requests.fetchToComing}/>
          <Rows title ={"Exitosas"} fetchUrl={requests.fetchTredding}/>
      </article>
    </div>

  

  )
}

export default Home