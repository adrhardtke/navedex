import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    h3 {
        font-weight: normal;
    }

    button {
        background: transparent;
        border:none;
        display: flex;
        align-items: center;

        svg {
            margin-right: .5em;
        }
    }
`