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

export const NaversList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2em;
    li {
        /* display: inline-block; */
        margin-right: .5em;
        margin-bottom: 2em;
    }
`

export const NaversContent = styled.div`
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

export const DeleteContainer = styled.div`
     h5 {
        font-size: 1.5em;
        font-weight: 600;
    }

    .buttons {
        float: right;
        margin: 1.5em 0;

        button {
            background: transparent;
            border: 1px solid #212121;
            padding: .5em 1em;
            width: 180px;
            height: 40px;

            &:first-child {       
                margin-right: 1.5em;
                margin-bottom: 1.5em;
            }

            & + button {
                background: #212121;
                color: #fff;
            }
        }
    }
`

