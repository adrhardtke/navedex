import styled, {keyframes} from 'styled-components'
import ProfilePicture from '../../assets/images/profile-picture.png'

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

export const ViewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* max-height: 500px; */
    max-width: 1000px;

    .data {
        margin: 2em;
        margin-top: 3em;
        margin-right: 2em;

        h4 {
            font-size: 1.5em;
            font-weight: 600;
            margin-bottom: .5em;
        }

        h5 {
            margin-top:1.5em;
            font-size: 1em;
            font-weight: 600;
        }

        p {
            margin-top: .5em;
        }
        
        .buttons {
            button {
                background: transparent;
                border:none;
                margin-top: 1.5em;
            } 
            
            a:first-child {
                margin-right: 1em;
            }
        }
    }
`

export const Image = styled.div`
    background: url(${props => props.src || ProfilePicture}) no-repeat center;
    background-size: cover;
    width: 100%;
`
