import styled from 'styled-components';

export const ToggleContainer = styled.div`
  min-width: 300px;
  min-height: auto;
  padding: 1rem;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: ${({ theme }) => theme.colors.orange10};
  color: ${({ theme }) => theme.colors.grey};
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.orange30};
  height: 1px;
  width: 100%;
`;

export const InfoOne = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-left: 1rem;
`;

export const MinMax = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding-left: 1rem;
`;

export const InfoTwo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-left: 1rem;
`;

export const InfoThree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const InfoFour = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const InfoFive = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.orange30};
`;
