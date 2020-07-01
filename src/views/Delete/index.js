import React from 'react';

import { Container } from './styles';

function Delete(_naver) {
    const {naver} = _naver
  return (
    <Container>
        <h5>Excluir Naver</h5>
        <p>Tem certeza que deseja excluir {naver.name}?</p>
        <div className="buttons">
            <button type="button">Cancelar</button>
            <button type="button">Excluir</button>
        </div>
    </Container>
  )
}

export default Delete;