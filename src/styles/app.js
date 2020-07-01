import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh;
        overflow: auto;
    }

    body {
        background: #fff;
        color: #212121;
        font-smooth: always;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, buttom {
        color: #222;
        font-size: 14px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        /* overflow-y: auto */
    }

    button {
        cursor: pointer;
        outline: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-family: 'Montserrat', sans-serif;
    }

    h1 {
        font-size: 2.5em;
        font-weight: 600;
    }
    
    .error {
        color:red;
        margin: .5em 0;
    }

    .modal-content {
        margin: 2em;
        /* min-width: 600px; */

        h4 {
            font-size: 1.5em;
        }

        p {
            margin-top: 1.5em;
        }
    }

    .modal-no-margin {
        margin:0;
    }

    .modal-large {
        /* min-width: 850px; */
    }

    .react-responsive-modal-modal {
        padding: 0;
    }

`
