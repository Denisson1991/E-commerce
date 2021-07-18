import styled from 'styled-components'

import {
    white,
    flexColumn,
    flexRow,
    backgroundBlack
} from '../../GlobalStyle'

export const HeaderTag = styled.header`

    width: 100%;
    min-height: 100px;
    position: absolute;
    top: 0;
    z-index: 99;


`
export const HeaderBackground = styled.div`

    background-color: ${white};
    width: 100%;
    min-height: 100px;

`

export const HeaderContainer = styled.div`
    margin: 0 auto;
    width: 95%;
    max-width: 1440px;
    height: 100%;
    ${flexColumn()}  
    z-index: 99;
   
   @media only screen and (max-width: 767px){
       flex-direction: row;
       flex-wrap: wrap;
   }
`

export const HeaderItems = styled.div`
    width: 100%;
    margin: 10px 0;
    ${flexRow()}

    @media only screen and (max-width: 767px){
       flex-direction: row;
       flex-wrap: wrap;
    }
   
`

export const LogoHeader = styled.img`

`

export const DivSearch = styled.div`
    width:100%;
    margin-left: 74px;
    margin-right: 28px;
    position: relative;
    ${flexRow()}
    color: white;

    @media only screen and (max-width: 767px){
        margin: 0;
    }
`

export const InputSearch = styled.input`
    width:80%;
    height:60px;
    border-radius: 10px;
    border: none;
    background: ${backgroundBlack};
    outline: none;
    color: ${white};
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.1em;
    padding: 0 20px;
`

export const LupaIcon = styled.img`
    position: absolute;
    right: 0;
    margin-right: 70px;
`

export const ButtonCart = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;

`
export const CartCounter = styled.div`
    position: absolute;
    right: 21px;
    top: 10px;
    color: ${white};
`