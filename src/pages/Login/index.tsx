import { FormWrapper, LoginContainer, RegisterButton, TextWrapper } from "./styled";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../shared/Logo";
import { Background } from "../../shared/Background";

export const Login = () => {
  return (
    <LoginContainer>
      <Logo fontSize="100px" animate={true} />
      <FormWrapper>
        <TextWrapper>
          <h3>Bem-vindo(a) de volta!</h3>
          <span>Acesse sua conta:</span>
        </TextWrapper>
        <LoginForm />
        <RegisterButton>
          Ainda não tem o login? <a href="#">Cadastre-se</a>
        </RegisterButton>
      </FormWrapper>
      <Background animate={true}/>
    </LoginContainer>
  );
};
