import styled from "styled-components";
import Card from "./Card.js";

const Conteiner = styled.div`
 display: flex;
 

`

    
const Destacadas=()=>{

    return(
        <section>
            <h2> Soy el titulo de la seccion destacada</h2>
            <Conteiner>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Conteiner>
        </section>
    )
};

export default Destacadas;