import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { useState } from "react";
import Busqueda from "./Busqueda";
import { useHistory } from "react-router-dom";

const StyledSearch = styled.div`
width:100%;
  max-width: 400px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: rgb(35, 39, 42);
  height: 20px;
  width: 500px;
  padding: 5px;
  border: 0.5px solid #fafafa;
  border-radius: 8px;
  color: #fafafa;
  font-family: "Montserrat Alternates";
  font-size: 18px;
  font-weight: 500;
`;

const Icono = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 30px;
`;

const Buscador = () => {
  const history = useHistory();

  const [valorDelInput, setValorDelInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // no dejes console log
    console.log(e.target.value);
    if (e.target.value) {
      setValorDelInput(e.target.value);
      history.push(`/search/multi/${e.target.value}`);

      // esto no deberia estar aca! una funcion no puede retornar un componente de React
      <Busqueda value={e.target.value} />;
    } else {
      setValorDelInput("");
      history.push(`/`);
    }
  };

  return (
    <StyledSearch>
      <Icono>
        <FontAwesomeIcon icon={faSearch} />
      </Icono>
      <StyledInput
        value={valorDelInput}
        onChange={handleChange}
        type="text"
        placeholder="Búsqueda..."
      />
    </StyledSearch>
  );
};

export default Buscador;
