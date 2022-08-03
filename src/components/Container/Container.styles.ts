import styled from 'styled-components';

export const CapitalsContainer = styled.div`
  min-width: 400px;
  min-height: 50vh;
  padding: 1.5rem;
`;

export const TitleContainer = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  padding-left: 1rem;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  min-height: 50vh;
  padding-right: 1rem;
`;
