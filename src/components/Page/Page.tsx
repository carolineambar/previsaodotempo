import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../config/GlobalStyle';
import theme from '../../config/Theme';
import { Main, Title, Line, TableWrapper } from './Page.styles';
import Table from '../Table';
import Search from '../Search/Search';
import Card from '../Card';
import { City } from '../../types/city';

const cities = [
  {
    location: 'Niterói, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: false,
    min: 18,
    max: 27,
    name: 'Niterói',
  },
  {
    location: 'Rio de Janeiro, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 18,
    max: 27,
    name: 'Rio de Janeiro',
  },
  {
    location: 'Belo Horizonte, SP - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'Belo Horizonte',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
];

const Page = () => {
  const [selectedCity, setSelectedCity] = React.useState<City | undefined>(undefined);
  const [searchTerm, setSearchTerm] = React.useState('');
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Title>Previsão do Tempo</Title>
        {selectedCity && <Card city={selectedCity} />}
        <Search name='search' id='search' submitSearch={setSearchTerm} />
        <Line />
        <Title small>Capitais</Title>
        <TableWrapper>
          <Table capitais={cities.slice(0, halfLength)} />
          <Table capitais={cities.slice(halfLength, capitais.length)} />
        </TableWrapper>
      </Main>
    </ThemeProvider>
  );
};
export default Page;
