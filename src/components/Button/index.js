import React from 'react';

import { NaveButton } from './styles';

function Button({children, onClick, type, width}) {
    return (
        <NaveButton
            type={type}
            width={width}
            onClick={onClick}
        >
            { children }
        </NaveButton>
    )
}

export default Button;
