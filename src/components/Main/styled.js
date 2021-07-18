import styled from 'styled-components'


export const Main = styled.main`
    
    margin-top: 100px;
    width:95%;
    max-width: 1440px;
    position: relative;

    @media only screen and (max-width: 767px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr, 4fr;
        margin-top: 200px;
    }


`

