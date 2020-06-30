import React from 'react';
import { Container, NaveInput } from './styles';

function InputWithLabel({id, label, onChange, placeholder, type, value, width}) {
  return (
        <Container width={width} >
            <label for={id}>{label}</label>
            <NaveInput
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Container>
  )
}

export default InputWithLabel;