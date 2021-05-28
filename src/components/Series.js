import React, { useState, useEffect } from "react";
import Destacadas from "../commons/Destacadas.js";
import Card from "../commons/Card.js";
import styled from 'styled-components'


const StyledSection=styled.section`
    background-color: grey;
    display:flex;
    justify-content: center;
    flex-wrap:wrap;

`

const Series = () => {

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const apikey = "e5c6d9951e2100ef1ce53ed994481153";

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`)
      .then((res) => res.json())
      .then((data) =>
        // console.log(data.results)
        setSeries(data.results)
      );
  }, []);

  return (
    <StyledSection>
      {series.map((serie) => (
        <Card title={serie.name} />
      ))}
    </StyledSection>
  );
};

export default Series;
