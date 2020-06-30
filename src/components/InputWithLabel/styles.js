import styled from 'styled-components'

export const Container = styled.div`
    label {
        display: block;
    }

    input {
        border: 1px solid #424242;
        padding: .5em;
        outline: none;
        width: ${props => props.width || 'auto'}
    }

`
export const NaveInput = styled.input``