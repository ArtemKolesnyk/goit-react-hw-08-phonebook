import styled from 'styled-components';

export const UserTitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  p {
    font-size: 22px;
    color: cyan;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: lightcyan;
      color: #fff;
      cursor: pointer;
    }
  }
`;
