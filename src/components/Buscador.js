import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { useState, useEffect } from "react";
import Busqueda from "./Busqueda";
import { useHistory } from "react-router-dom";

const StyledSearch = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;

const Buscador = () => {
  const history = useHistory();

  const [valorDelInput, setValorDelInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    if (e.target.value) {
    
      setValorDelInput(e.target.value);
      history.push(`/search/multi/${e.target.value}`);

      <Busqueda value={e.target.value} />;
    } else {
        setValorDelInput("")
      history.push(`/`);
    }
    // setValorDelInput("")
  };

  console.log(valorDelInput);

  return (
    <StyledSearch>
      <FontAwesomeIcon icon={faSearch} />
      <input
        value={valorDelInput}
        onChange={handleChange}
        type="text"
        placeholder="Búsqueda..."
      />
    </StyledSearch>
  );
};

export default Buscador;
