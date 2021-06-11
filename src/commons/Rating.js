import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar , faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// import { fasStar } from "@fortawesome/free-regular-svg-icons";

const Icono = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;


const Rating = ({rating}) => {
  const stars = [];
  const fullStars = Math.floor(rating / 2);
  const halfStars = rating % 2 ? 1 : 0;
  const emptyStars = 5 - (fullStars + halfStars);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icono><FontAwesomeIcon icon={faStar} key={`full-${i}`} /></Icono>);
  }

  const completeStarsArray = () => {
    halfStars &&
      stars.push(<Icono><FontAwesomeIcon icon={faStarHalfAlt} key={`half`} /></Icono>);

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icono><FontAwesomeIcon icon={faStar} key={`empty-${i}`} /></Icono>);
    }
    return stars;
  };

  console.log(stars)
  return (
    <>
      <div>
        {stars.length !== 5 && completeStarsArray()}
      </div>
    </>
  );
};

export default Rating;