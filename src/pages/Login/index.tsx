import { FormWrapper, LoginContainer } from "./styled";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../shared/Logo";
import { Background } from "../../shared/Background";

export const Login = () => {
  return (
    <LoginContainer>
      <Logo animate={true} />
      <FormWrapper>
        <LoginForm animate={true} />
      </FormWrapper>
      <Background animate={true} />
    </LoginContainer>
  );
};
