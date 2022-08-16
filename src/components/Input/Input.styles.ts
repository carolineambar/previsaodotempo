import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/search.svg';

export const StyleSearch = styled.form`
  display: flex;
  flex-direction: row;
`;

export const StyleInput = styled.input`
  outline: none;
  height: 2.5rem;
  width: 20rem;
  padding-left: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange30};
  border-top: 1px solid ${({ theme }) => theme.colors.orange30};
  border-left: 1px solid ${({ theme }) => theme.colors.orange30};
`;

export const StyleButton = styled.button`
  text-align: right;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange30};
  border-top: 1px solid ${({ theme }) => theme.colors.orange30};
  border-right: 1px solid ${({ theme }) => theme.colors.orange30};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const Icon = styled(Logo)`
  height: 1.8rem;
  width: auto;
  align-items: center;
  padding: 5px;
  padding-top: 7px;
  fill: ${({ theme }) => theme.colors.grey};
`;
