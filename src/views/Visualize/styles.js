import styled from 'styled-components'
import ProfilePicture from '../../assets/images/profile-picture.png'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 500px;
    min-width: 1000px;

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
    }
`

export const Image = styled.div`
    background: url(${props => props.src || ProfilePicture}) no-repeat center;
    background-size: cover;
    width: 100%;
`