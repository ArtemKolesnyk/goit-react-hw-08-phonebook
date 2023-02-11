import styled from 'styled-components';

export const UserTitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  p {
    font-size: 22px;
    &::first-letter {
      color: green;
    }
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: red;
      color: #fff;
      cursor: pointer;
    }
  }
`;
