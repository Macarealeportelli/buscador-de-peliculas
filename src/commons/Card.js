import styled from "styled-components";

const Tarjeta=styled.article`
margin: 10px;
padding: 5px;

width: 80px;
height: 150px;

border: solid 1px black;
display: flex;
justify-content: center;
flex-direction: column;

color: #fafafa;
`



const Card =({title, id})=>{
    return(
        <Tarjeta key={id}>
            <div>
            <img/>
            <h4>{title}</h4>
            </div>
        </Tarjeta>
    )
};

export default Card;