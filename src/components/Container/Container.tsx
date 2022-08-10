import React from 'react';
import {
  TitleContainer,
  TableContainer,
  CapitalsContainer,
  Line,
  TitleTable,
  ContentTable,
  TableRow,
} from './Container.styles';

const Container = () => (
  <CapitalsContainer>
    <Line />
    <TitleContainer>Capitais</TitleContainer>
    <TableContainer>
      <TitleTable>
        <TableRow>
          <th>Mín.</th>
          <th>Máx.</th>
        </TableRow>
      </TitleTable>
      <ContentTable>
        <TableRow>
          <td>18º</td>
          <td>27º</td>
          <td>Rio de Janeiro</td>
        </TableRow>
        <TableRow>
          <td>14º</td>
          <td>22º</td>
          <td>São Paulo</td>
        </TableRow>
        <TableRow>
          <td>21º</td>
          <td>32º</td>
          <td>Belo Horizonte</td>
        </TableRow>
      </ContentTable>
    </TableContainer>
  </CapitalsContainer>
);

export default Container;
