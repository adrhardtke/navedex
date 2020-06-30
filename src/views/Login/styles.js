import styled from 'styled-components'
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
`

export const SubtmitButton = styled.button.attrs({
    type: 'submit'
})`
    width: 100%;
    background: #212121;
    color: #fff;
    border:none;
    outline: none;
    padding: .8em;
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