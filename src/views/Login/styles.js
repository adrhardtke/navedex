import styled, {keyframes} from 'styled-components'
import { pxToEm } from '../../helpers'

export const Container = styled.div`
    /* width: 100%; */
    max-width: 447px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
`
export const Form = styled.form`
    width: 100%;
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 2em;

        label {
            margin-bottom: .25em;
        }

        input {
            outline: none;
            border: 1px solid #424242;
            padding: .5em;
        }
    }

    .error {
        margin-top: 0;
    }
`

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid #212121;
    padding: ${pxToEm(40)}em ${pxToEm(32)}em;

    svg {
        margin-bottom: ${pxToEm(40)}em;
    }
`

const rotate = keyframes`
    from {
        transform:rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const ButtonText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;

    svg {
        animation: ${rotate} 1s linear infinite;
        margin-bottom: 0 !important;
    }
`