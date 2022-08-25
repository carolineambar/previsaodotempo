import React from 'react';
import { Container, Title, Content, Row } from './Table.styles';
import { City } from '../../types/city';

const Table: React.FC<{ capitais: Array<City> }> = ({ capitais }) => (
  <Container>
    <Title>
      <Row>
        <th>Mín.</th>
        <th>Máx.</th>
      </Row>
    </Title>
    <Content>
      {capitais.map(({ min, max, name }) => (
        <Row>
          <td>{min}</td>
          <td>{max}</td>
          <td>{name}</td>
        </Row>
      ))}
    </Content>
  </Container>
);

export default Table;
