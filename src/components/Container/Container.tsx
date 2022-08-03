import React from 'react';
import { TitleContainer, TableContainer, CapitalsContainer } from './Container.styles';

const Container = () => (
  <CapitalsContainer>
    <hr />
    <TitleContainer>Capitais</TitleContainer>
    <TableContainer>
      <div>Máx.</div>
      <div>Mín.</div>
    </TableContainer>
  </CapitalsContainer>
);

export default Container;
