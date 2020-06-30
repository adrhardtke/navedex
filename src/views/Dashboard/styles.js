import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    from {
        transform:rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Content = styled.div`
    margin-top: 2.5em;
`

export const NaversList = styled.ul``

export const NaversContent = styled.div`
    margin-top: 1.5em;

    .notification {
        p {
            color: rgba(0,0,0,.5);
            text-align: center;
            font-size: 1.5em;
        }

            svg {
                margin:0 auto;
                display: block;
                margin-top: 5em;
                animation: ${rotate} 1s linear infinite;
            }
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

