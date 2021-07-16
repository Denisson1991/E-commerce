import { createGlobalStyle } from 'styled-components'

export const backgroundBlack = '#3C3B3F'
export const black = '#272727'
export const white = '#D3CBB8'

export const flexColumn = () => {
    return `
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `
}

export const flexRow = () => {
    return `
        display:flex;
        justify-content: center;
        align-items: center;    
    `
}

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${backgroundBlack};
        font-family: 'Ropa Sans', sans-serif;
        color: ${white};
    }
`

export default GlobalStyle