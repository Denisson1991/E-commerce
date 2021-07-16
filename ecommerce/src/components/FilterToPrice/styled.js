import styled from 'styled-components'
import { flexColumn, white, black, flexRow } from '../../GlobalStyle'

export const FilterToPriceContainer = styled.div`
    min-width: 240px;
`

export const FilterToPriceGroup = styled.div`

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    position: -webkit-sticky;
    position: sticky;
    top: 10px;
    width: 98%;
    
   
`

export const FilterToPriceTitle = styled.h1`
    font-size: 40px;
    line-height: 43px;
    letter-spacing: 0.1em;
    margin-bottom: 10px;;
`

export const FilterToPriceP = styled.p`

    display: flex;  
    justify-content: space-around;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.1em;
    border-bottom: 1px solid transparent;
    margin-top: 45px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);

    :hover{
        color: #adadad;
        border-bottom: 1px solid #FFF;
        padding-right: 10px;
    }
`

export const InputFilterToPrice = styled.input`
    background: ${white};
    color: ${black};
    border: none;
    border-radius: 5px;
    width: 30%;
    min-width: 30px;
    height: 36px;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 16px;
    line-height: 17px;
    letter-spacing: 0.1em;
    

    :focus-visible{
        outline: none;
        background-color: #adadad;
    }
`

export const DivInputFilterToPrice = styled.div`

    display: flex;
    width: 30%;
    margin-top: 20px ;
    justify-content: space-around;
`