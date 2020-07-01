import React from 'react';

import { Container, Image } from './styles';

function Visualize(_naver) {
  const {naver} = _naver
  return (
      <Container>
        <Image src={naver.url} />
        <div className="data">
            <h4>{naver.name}</h4>
            <p>{naver.job_role}</p>
            <h5>Idade</h5>
            <p></p>

        </div>
      </Container>
  )
}

export default Visualize;