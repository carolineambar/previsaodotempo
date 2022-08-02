import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;