import { Input } from "../../styles/Input";
import { RegisterButton, TextWrapper } from "../../pages/Login/styled";
import { CheckBox, Form, LoginButton, Options } from "./styled";

interface LoginFormProps {
  animate: boolean;
}

export const LoginForm = ({ animate }: LoginFormProps) => {
  return (
    <Form animate={animate}>
      <TextWrapper>
        <h3>Bem-vindo(a) de volta!</h3>
        <span>Acesse sua conta:</span>
      </TextWrapper>
      <Input type="text" placeholder="Usuário" />
      <Input type="password" placeholder="Senha" />
      <Options>
        <CheckBox>
          <input type="checkbox" />
          <label>Salvar login</label>
        </CheckBox>
        <a href="#">Esqueci a senha</a>
      </Options>
      <LoginButton to="/personagens">Entrar</LoginButton>
      <RegisterButton>
        Ainda não tem o login? <a href="#">Cadastre-se</a>
      </RegisterButton>
    </Form>
  );
};
