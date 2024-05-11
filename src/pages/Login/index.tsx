import { FormWrapper, LoginContainer } from "./styled";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import { Background } from "../../components/Background";

export const Login = () => {
  return (
    <LoginContainer>
      <Logo fontSize="100px" animate={true} />
      <FormWrapper>
        <LoginForm animate={true} />
      </FormWrapper>
      <Background animate={true} />
    </LoginContainer>
  );
};
