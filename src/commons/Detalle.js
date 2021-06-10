import styled from 'styled-components';
import useFetchDetalles from '../hooks/useFetchDetalles';

const StyledSection = styled.section`
  padding: 20px;
  background-color: rgb(35, 39, 42);
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;


// const URL_DETALLES= "https://api.themoviedb.org/3/movie/{movie_id}?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US";
const URL_DETALLES= "https://api.themoviedb.org/3/movie/337404?api_key=e5c6d9951e2100ef1ce53ed994481153&language=en-US";

const Detalle = ()=>{

    const detalles = useFetchDetalles(URL_DETALLES)
    console.log(detalles)

    return(
        <>
        <StyledSection>
        <div>Encabezado</div>
        <div>Rutas/Links</div>
        <div>
            <h5>Contnedor Detalle</h5>
            <div>imagen</div>
            <div>
                <p>Titulo</p>
                <p>Rating</p>
                {/* <p>{detalles.overview}</p> */}
                <p>Duración</p>
                <p>Géneros</p>
                <p>Presupuesto</p>
                <p>Recaudación</p>
                <p>Producción</p>
                <h5>Iconitos/links</h5>
                
            </div>
        </div>
        </StyledSection>
        </>
    )
};

export default Detalle;