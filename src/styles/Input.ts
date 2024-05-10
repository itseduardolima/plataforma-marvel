import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  border: 2px solid transparent;
  background-color: #ffffff;
  color: #84848d;
  font-size: 22px;
  font-weight: 100;
  outline: none;

  padding: 20px;
  width: 383px;
  height: 73px;

  &:focus {
    border: 2px solid var(--bg-red);
  }

  &::placeholder {
    color: #d1d1d6;
    font-size: 22px;
    font-family: "Axiforma", sans-serif;
    font-weight: 100;
  }
`;
