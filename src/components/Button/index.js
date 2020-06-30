import React from 'react';

import { NaveButton } from './styles';

function Button({children, type, width}) {
    return <NaveButton type={type} width={width}>{ children }</NaveButton>
}

export default Button;
