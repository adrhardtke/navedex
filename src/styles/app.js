import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #fff;
        font-smooth: always;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, buttom {
        color: #222;
        font-size: 14px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
        outline: none;
    }

    h1 {
        font-size: 2.5em;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

`
