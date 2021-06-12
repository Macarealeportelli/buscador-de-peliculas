import { useState, useEffect } from 'react'

const useFetchTarjetas = (url) => {
  const [tarjetas, setTarjetas] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    // data.results 
    .then(data => setTarjetas(data.results))
  }, [])


  return tarjetas
}

export default useFetchTarjetas;