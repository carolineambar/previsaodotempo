import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../config/GlobalStyle';
import theme from '../../config/Theme';
import { Main, Title } from './Page.styles';

const Page: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main>
      <Title>Previsão do Tempo</Title>
    </Main>
  </ThemeProvider>
);

export default Page;
