import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-regular-svg-icons";

const Icono = styled.span`
  margin-left: 10px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 575.98px) {
    font-size: 10px;
  }

`;

const Rating = ({ rating }) => {
  const stars = [];
  const estrellaCompleta = Math.floor(rating / 2);
  const estrellaMitad = rating % 2 ? 1 : 0;
  const estrellaVacia = 5 - (estrellaCompleta + estrellaMitad);

  for (let i = 0; i < estrellaCompleta; i++) {
    stars.push(
      <Icono>
        <FontAwesomeIcon icon={faStar} key={`estrellaCompleta${i}`} />
      </Icono>
    );
  }

  const completeStarsArray = () => {
    estrellaMitad &&
      stars.push(
        <Icono>
          <FontAwesomeIcon icon={faStarHalfAlt} key={`estrellaMitad`} />
        </Icono>
      );

    for (let i = 0; i < estrellaVacia; i++) {
      stars.push(
        <Icono>
          <FontAwesomeIcon icon={fasStar} key={`estrellaVacia${i}`} />
        </Icono>
      );
    }
    return stars;
  };

  return (
    <>
      <div>{stars.length !== 5 && completeStarsArray()}</div>
    </>
  );
};

export default Rating;
