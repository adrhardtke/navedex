import styled, {keyframes} from 'styled-components'

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
    }
`

export const Content = styled.div`
    max-width: 600px;
    margin: 0 auto;
    
`

export const Form = styled.form`

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em;
        margin-top: 2em;

        @media (max-width: 425px){
            grid-template-columns: 1fr;
        }
    }

    button {
        float: right;
        margin-top: 2em;
        margin-bottom:1em;
    }
`