import styled from 'styled-components'
import ProfilePicture from '../../assets/images/profile-picture.png'

export const CardContent = styled.li`
    list-style: none;

    h2 {
        font-size: 1em;
        font-weight: 600;
        margin: 1em 0 .25em 0;
    }

    .buttons {
        margin-top: .5em;

        button {
            background: transparent;
            border:none;

            & + button {
                margin-left: .5em;
            }
        }
    }

`

export const Image = styled.div`
        width: 280px;
        height: 280px;
        background: url(${props => props.src || ProfilePicture}) no-repeat center;
        background-size: cover;
 `