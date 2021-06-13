import styled from "styled-components";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSection = styled.section`
  width: 100%;
  height: 700px;

  padding: 10px;
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  .scroll {
    overflow: no-scroll;
  }
`;

const Icono = styled.span`
  font-size: 300px;
`;

const Page404 = () => {
  return (
    <StyledSection>
      <Icono>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </Icono>
      <h1> Ups! No encontramos lo que estas buscando</h1>
    </StyledSection>
  );
};

export default Page404;
