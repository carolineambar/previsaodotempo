import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  gap: 40px;

  @media (min-width: 1200px) {
    height: 50vh;
  }
`;

export const Title = styled.h1<{ small?: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${({ small }) => small && 'font-size: 27px;'};
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 1px;
  width: 50%;
`;

export const TableWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
