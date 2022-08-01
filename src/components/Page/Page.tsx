import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from '../../config/GlobalStyle';
import theme from '../../config/Theme';

const Page: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <p>Ooi</p>
  </ThemeProvider>
);

export default Page;
