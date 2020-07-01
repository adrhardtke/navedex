import styled from 'styled-components'

export const Container = styled.div`

    h5 {
        font-size: 1.5em;
        font-weight: 600;
    }

    .buttons {
        float: right;

        button {
            background: transparent;
            border: 1px solid #212121;
            padding: .5em 1em;
            margin: 1.5em 0;
            width: 180px;
            height: 40px;

            & + button {
                margin-left: 1.5em;
                background: #212121;
                color: #fff;
            }
        }
    }

`