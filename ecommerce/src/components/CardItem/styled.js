import styled from 'styled-components'
import { white, backgroundBlack, black } from '../../GlobalStyle'

export const CardItemContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 29%;
    min-width: 300px;
    margin: 1%;
    padding: 10px;
    background-color: ${white};
    border-radius: 10px;

    @media only screen and (max-width: 767px){
       min-width: 200px;
   }
`
export const CardImageContainer = styled.div`
    background-image: url('./star.png');
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    min-height: 275px;
    width: 100%;
    :hover{
        background-image: url('https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif');
    }
`
export const CardImage = styled.img`
    max-width: 80%;
    max-height: 100%;

    :hover {
        animation: float 4s ease-in-out infinite;
        transition: 2s ease-in-out;
    }

    @keyframes float{
        0%, 100%{
            transform:  rotate(0deg);
        }
        25%{
            transform: translatey(-10px) rotate(15deg);
        }

        75%{
            transform: translatey(10px) rotate(-15deg);
        }
    }
`

export const CardContentContainer = styled.div`
    width: 70%;
    text-align: center;
`

export const CardTitle = styled.h2`
    color: ${black};
`

export const CardPrice = styled.h3`
    color: ${black};
    border-top: 1px solid ${black};
    border-bottom: 1px solid ${black};
    padding: 5px 0;
`

export const CardButton = styled.button`
    background-color: ${backgroundBlack};
    color: ${white};
    border: none;
    border-radius: 5px;
    width: 90%;
    padding: 10px 25px;

    background-image: -webkit-linear-gradient(45deg, #9a0000 50%, transparent 50%);
    background-image: linear-gradient(45deg, #9a0000 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 500ms ease-in-out;
    transition: background 500ms ease-in-out;

    :hover {
        background-position: 0;
        cursor: pointer;
        outline: 0;
        background-color: #9a0000;
    }
`
