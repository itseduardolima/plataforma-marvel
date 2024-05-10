import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { fadeIn } from "../../animations";

interface LoginFormProps {
  animate: boolean;
}

export const Form = styled.form.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<LoginFormProps>`
  opacity: ${(props) => (props.animate ? 0 : 1)};
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 100;

  ${(props) =>
    props.animate &&
    css`
      animation: ${fadeIn} 3s forwards;
      animation-delay: 2s;
    `}
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 15px;

  > a {
    color: var(--bg-gray);
    text-decoration: none;
    border-bottom: 1px solid var(--bg-red);
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
    border: 1px solid var(--bg-red);
  }

  input:checked {
    accent-color: var(--bg-red);
  }

  label {
    font-size: 15px;
    font-weight: 500;
    color: #84848d;
  }

  @media (min-width: 600px) and (max-width: 1025px) {
    gap: 10px;

    input {
      width: 20px;
      height: 20px;
    }

    label {
      font-size: 18px;
    }
  }
`;

export const LoginButton = styled(Link)`
  width: 100%;
  padding: 10px;
  border-radius: 33px;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  background-color: var(--bg-red);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #aa0000;
  }
`;
