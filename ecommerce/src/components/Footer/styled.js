import styled from 'styled-components'
import {white} from '../../GlobalStyle'


export const FooterBackground = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
`

export const ContainerFooter = styled.div`
    color:white;
    display: flex;

    a{
        text-decoration: none;
        color: ${white};
    }
`

export const Text = styled.p`
    color:white;
`

export const Circulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 5px;
    height: 25px;
    width: 25px;
    transition: width 0.5s cubic-bezier(0.000, 0.985, 0.635, 1.025), border-radius 0s linear;
    overflow: hidden;
    
    :hover {
        display: block;
        width: 200px;
        border-radius: 10px;
        cursor: pointer;
        text-align: center;
    }
`
export const R = styled(Circulo)`
    background-color: red;
    :before{
        content: "D";
    }
    :hover {
        :before{
            content: "";
        }
        :after {
            content: "Denisson Vasconcelos da Silva";
            line-height: 25px;
        }
    }
    
    `
