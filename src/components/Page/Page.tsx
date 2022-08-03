import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../config/GlobalStyle';
import theme from '../../config/Theme';
import { Main, Title } from './Page.styles';
import Container from '../Container';

const Page: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main>
      <Title>Previsão do Tempo</Title>
      <Container />
    </Main>
  </ThemeProvider>
);

export default Page;
