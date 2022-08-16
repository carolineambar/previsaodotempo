import styled from 'styled-components';

export const CapitalsContainer = styled.div`
  min-width: 450px;
  min-height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 1px;
  width: 100%;
`;

export const TitleContainer = styled.h2`
  color: ${({ theme }) => theme.colors.white};
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
