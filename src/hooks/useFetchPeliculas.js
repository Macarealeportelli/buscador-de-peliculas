import { useState, useEffect } from 'react'

const useFetchPeliculas = (url) => {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    // data.results 
    .then(data => setPeliculas(data.results))
  }, [])


  return peliculas
}

export default useFetchPeliculas;