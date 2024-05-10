import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5.5rem;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 998px) {
    width: 50vw;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;

  > h3 {
    color: var(--bg-red);
    font-size: 30px;
  }

  > span {
    font-size: 20px;
    color: var(--bg-gray);
  }
`;

export const RegisterButton = styled.span`
  display: flex;
  gap: 5px;
  color: var(--bg-gray);
  font-size: 15px;
  margin-top: 1rem;

  > a {
    color: var(--bg-red);
    text-decoration: none;
  }
`;
