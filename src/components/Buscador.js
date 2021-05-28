import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const StyledSearch = styled.div`
width: 150px;
display: flex;
align-items: center;
`;





const Buscador=()=>{

    return(
        <StyledSearch>
            <FontAwesomeIcon icon={ faSearch}/>
            <input type="text" placeholder="Búsqueda..."/>
        </StyledSearch>
    )
};

export default Buscador;
