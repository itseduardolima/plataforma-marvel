import { Input } from "../../styles/Input";
import { CheckBox, Form, LoginButton, Options } from "./styled";

interface LoginFormProps {
  animate: boolean;
}

export const LoginForm = ({ animate }: LoginFormProps) => {
  return (
    <Form animate={animate}>
      <Input type="text" placeholder="Usuário" />
      <Input type="text" placeholder="Senha" />
      <Options>
        <CheckBox>
          <input type="checkbox" />
          <label>Salvar login</label>
        </CheckBox>
        <a href="#">Esqueci a senha</a>
      </Options>
      <LoginButton to="/personagens">Entrar</LoginButton>
    </Form>
  );
};
