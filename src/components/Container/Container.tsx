import React from 'react';
import {
  TitleContainer,
  TableContainer,
  CapitalsContainer,
  TitleTable,
  ContentTable,
  TableRow,
} from './Container.styles';

const capitais = [
  {
    min: 18,
    max: 27,
    name: 'Rio de Janeiro',
  },
  {
    min: 14,
    max: 22,
    name: 'São Paulo',
  },
  {
    min: 21,
    max: 32,
    name: 'Belo Horizonte',
  },
  {
    min: 24,
    max: 37,
    name: 'Brasília',
  },
  {
    min: 24,
    max: 37,
    name: 'Belém',
  },
];

const Container = () => (
  <CapitalsContainer>
    <TitleContainer>Capitais</TitleContainer>
    <TableContainer>
      <TitleTable>
        <TableRow>
          <th>Mín.</th>
          <th>Máx.</th>
        </TableRow>
      </TitleTable>
      <ContentTable>
        {capitais.map(({ min, max, name }) => (
          <TableRow>
            <td>{min}</td>
            <td>{max}</td>
            <td>{name}</td>
          </TableRow>
        ))}
      </ContentTable>
    </TableContainer>
  </CapitalsContainer>
);

export default Container;
