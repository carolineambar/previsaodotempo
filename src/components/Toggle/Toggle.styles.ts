import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/arrow.svg';

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

export const Head = styled.h6`
  padding-left: 1rem;
`;

export const Temp = styled.b`
  font-size: 30px;
  padding-left: 1rem;
`;

export const TempSens = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  padding-left: 1rem;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.orange30};
  height: 1px;
  width: 100%;
`;

export const SenVenUm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  font-size: 12px;
`;

export const MinMax = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  font-size: 12px;
`;

export const VenUm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  padding-left: 1rem;
  font-size: 12px;
`;

export const TempWeek = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const NextDays = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const TempNextDays = styled.span`
  display: flex;
  flex-direction: row;
  gap: 2px;
  font-size: 13px;
  padding-left: 3px;
  color: ${({ theme }) => theme.colors.orange30};
`;

export const MaxMin = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
`;

export const ArrowMax = styled(Logo)`
  height: 20px;
  width: auto;
  padding-top: 2px;
  padding-bottom: 5px;
  fill: ${({ theme }) => theme.colors.orange30};
`;

export const ArrowMin = styled(Logo)`
  height: 20px;
  width: auto;
  padding-top: 5px;
  padding-bottom: 2px;
  fill: ${({ theme }) => theme.colors.orange30};
  transform: rotate(180deg);
`;
