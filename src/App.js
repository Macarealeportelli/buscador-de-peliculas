import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/Home.js";
import Peliculas from "./components/Peliculas.js";
import Series from "./components/Series.js";
import Buscador from "./components/Buscador.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faVideo, faTv} from '@fortawesome/free-solid-svg-icons';

// import {faHome} from '@fortawesome/free-solid-svg-icons';

const BarraNavegacion = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 10px;
 

  background-color: rgb(35, 39, 42);
  color: #fafafa;

  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  &:visited {
    color: #fafafa;
  }
  &:active {
    color: rgb(33, 150, 243);
  }
`;

const StyledSection=styled.section`
    width: 100%;
    height: auto;
    background-color: grey;
    margin:0;

    display:flex;
    justify-content: center;
    flex-wrap:wrap;

`

function App() {
  return (
    <>
      <BrowserRouter>
        <BarraNavegacion>
          <StyledLink to="/"><FontAwesomeIcon icon={faHome}/></StyledLink>
          <StyledLink to="/peliculas"><FontAwesomeIcon icon={faVideo}/></StyledLink>
          <StyledLink to="/series"><FontAwesomeIcon icon={faTv}/></StyledLink>
          <Buscador />
        </BarraNavegacion>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/series" component={Series} />
          {/* <Route exact path="/series" component={PeliculasTendencias} />
          <Route exact path="/series" component={PeliculasPopulares} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/series" component={Series} /> */}
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
