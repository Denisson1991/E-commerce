import styled from 'styled-components'

export const ContainerFinal = styled.div`

    position: fixed;
    top:5vh;
    left:35vw;
    z-index: 99;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;

    background-color:rgba(235, 235, 235, 1);
    border-radius:10px;
    box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);
`
export const Titulo = styled.h1`

    color:rgba(39, 39, 39, 1);
    letter-spacing: 0.2em;
    font-size: 36px;

`
export const Paragrafo = styled.p`

    color:rgba(39, 39, 39, 1);
    letter-spacing: 0.2em;
    font-size: 20px;
    text-align: justify;

`
export const CheckIcon = styled.img`

    max-width: 300px;
    mix-blend-mode: multiply;

`
export const Delete = styled.img`
    cursor: pointer;
    align-self: flex-start;

`