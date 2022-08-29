import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../config/GlobalStyle';
import theme from '../../config/Theme';
import { Container, Main, Title, Line, TableWrapper } from './Page.styles';
import Table from '../Table';
import Search from '../Search/Search';
import Card from '../Card';
import { City } from '../../types/city';
import getData from '../../api/index';

const Page = () => {
  const [selectedCity, setSelectedCity] = React.useState<City | undefined>(undefined);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [cities, setCities] = React.useState<Array<City>>([]);
  const capitais = cities.filter((city) => city.capital);
  const halfLength = capitais.length / 2;

  React.useEffect(() => {
    if (searchTerm) {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const newCity = cities.filter((city) => {
        const lowercaseName = city.name.toLowerCase();
        return lowercaseName.includes(lowercaseSearchTerm);
      });
      setSelectedCity(newCity[0]);
    }
  }, [searchTerm]);

  React.useEffect(() => {
    (async () => {
      const newCities = await getData();
      setCities(newCities);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Title>Previsão do Tempo</Title>
        {selectedCity && <Card city={selectedCity} />}
        <Search name='search' id='search' submitSearch={setSearchTerm} />
        <Line />
        <Container>
          <Title as='h2' small>
            Capitais
          </Title>
          <TableWrapper>
            <Table capitais={capitais.slice(0, halfLength)} />
            <Table capitais={capitais.slice(halfLength, capitais.length)} />
          </TableWrapper>
        </Container>
      </Main>
    </ThemeProvider>
  );
};
export default Page;
