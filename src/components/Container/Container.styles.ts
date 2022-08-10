import styled from 'styled-components';

export const CapitalsContainer = styled.div`
  min-width: 500px;
  min-height: 50vh;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 1px;
  width: 100%;
`;

export const TitleContainer = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  padding-left: 2rem;
`;

export const TableContainer = styled.table`
  padding-left: 2rem;
`;

export const TitleTable = styled.thead`
  font-size: 9px;
`;

export const ContentTable = styled.tbody`
  font-size: 14px;
`;

export const TableRow = styled.tr`
  display: flex;
  gap: 1rem;
`;
