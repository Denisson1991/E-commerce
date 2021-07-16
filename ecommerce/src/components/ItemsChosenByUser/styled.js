import styled from 'styled-components'
import { CardButton } from '../CardItem/styled'
import { white } from '../../GlobalStyle'


export const CartContainer = styled.div`
    z-index: 99;
    width: 100%;
    margin: 0 auto;

    background-color: ${white};
    animation: showCart 0.4s ease-in forwards;

    @keyframes showCart {
        0% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`

export const ContainerItem = styled.div`
    display:flex;
    align-items:center;
    margin: 0 auto;
    width: 95%;
    height: 25vh;
    padding:20px 0;
    box-shadow: 0px 13px 16px 0 rgb(36 36 36 / 40%);
`
export const DeleteIcon = styled.div`
    width: 10%;
    margin-bottom:12%;
    padding-top: 20px;
    cursor: pointer;
    text-align: center;

`
export const ContainerItemImg = styled.div`
    width: 15%;
    img {
        max-height: 24vh;
        max-width: 100%;
    }
`
export const ContainerProductText = styled.div`
    width: 45%;
    display:block;
`
export const ItemName = styled.h1`
    letter-spacing: 0.1em;
    color:rgba(39, 39, 39, 1);
    font-size:42px;
`

export const ItemDescription = styled.p`
    font-family: 'Ropa Sans', sans-serif;
    letter-spacing: 0.1em;
    color:rgba(39, 39, 39, 1);
    font-size: 20px;
`

export const ContainerQuantity = styled.div`
    width:20%;
    letter-spacing: 0.1em;
`
export const QuantityTitle = styled.p`
    text-align: center;
    color: #000;
`
export const QuantityController = styled.div`
    display:flex;
    justify-content:center;
`
export const QuantityControllerButton = styled.button`
    border:none;
    background-color: ${white};
    cursor: pointer;
`

export const ItemQuantity = styled.div`
    background-color: rgba(28, 28, 28, 1);
    color: ${white};
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:8px;
    width:4vw;
    height:7vh;
    margin-left:10%;
    margin-right:10%;
`

export const CartFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26vh;
    width: 95%;
    margin: 0 auto;
    max-width: 1440px;
    box-shadow: 0 1em 1em 0 rgb(36 36 36 / 40%);

`

export const Logo = styled.img`
    width: 15vw;
    opacity: 0.2;
    margin-left: 16px;
    margin-bottom: 25px;
`

export const ContainerTotal = styled.div`
    border-top:1px solid black;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 15vh;
    width: 30vw;
    margin-right: 40px;
`
export const H1Total = styled.h1`
    color:rgba(39, 39, 39, 1);
`
export const H3Total = styled.h3`
    color:rgba(39, 39, 39, 1);
`
export const FinishButton = styled(CardButton)`
    height: 8vh;
    width: 15vw;
    margin-bottom: 20px;
    background-color: rgba(39, 39, 39, 1);
    color: ${white};
    font-size: 18px;
    border-radius: 8px;
`