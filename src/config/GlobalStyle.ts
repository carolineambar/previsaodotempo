import { createGlobalStyle } from 'styled-components';
import { ThemeTypes } from './Theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeTypes }>`
  * {
    box-sizing: border-box;
    margin: 0;
    ::selection {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.black};
    }
    
  }
  body {
    background-image: linear-gradient(${({ theme }) => theme.colors.orange30}, ${({ theme }) =>
  theme.colors.yellow});
    background-repeat: no-repeat;
    font-family: 'Bree Serif', serif;
    color: ${({ theme }) => theme.colors.black};
    min-height: 100vh;
  };
`;

export default GlobalStyle;
