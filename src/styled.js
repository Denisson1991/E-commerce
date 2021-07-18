import styled from 'styled-components'


export const FlexContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height: 100vh;
  position: relative;
`

export const DivAddedToCart = styled.div`

    position: fixed;
    top: 0;
    background-color: green;
    width: 220px;
    text-align: center;
    border-radius: 0 0 50px 50px;
    padding-top: 15px;
    z-index: 999999;

`
export const CloseMessage = styled.div`

    margin: 10px 0;
    cursor: pointer;
    font-size: large;

`

