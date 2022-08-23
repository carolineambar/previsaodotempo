import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../config/GlobalStyle';
import theme from '../../config/Theme';
import { Main, Title, Line } from './Page.styles';
import Container from '../Container';
import Input from '../Input/Input';
import Toggle from '../Toggle';

const Page: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main>
      <Title>Previsão do Tempo</Title>
      <Toggle />
      <Input type='text' name='search' />
      <Line />
      <Container />
    </Main>
  </ThemeProvider>
);

export default Page;
