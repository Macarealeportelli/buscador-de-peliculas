import { useState, useEffect } from 'react'

const useFetchDetalles = (url) => {
  const [detalles, setDetalles] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    // data.results 
    .then(data => setDetalles(data.results))
  }, [])


  return detalles;
}

export default useFetchDetalles;