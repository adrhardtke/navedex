import React from 'react';
import { FiChevronLeft as BackButton } from 'react-icons/fi'

import { Container } from './styles'

function Rollback({onClick, title}) {
  return (
    <Container>
        <button type="button" onClick={onClick}>
            <BackButton color="#212121" size={24} />
        </button>
        <h3>{title}</h3>
    </Container>
  )
}

export default Rollback;