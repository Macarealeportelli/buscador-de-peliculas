import { useState, useEffect } from 'react'

const useFetchSeries = (url) => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    // data.results 
    .then(data => setSeries(data.results))
  }, [])


  return series
}

export default useFetchSeries;