import { useState, useEffect } from "react";
import { Input } from "../../styles/Input";
import { LinkWrapper, TextWrapper } from "../../pages/Login/styled";
import { CheckBox, Form, Button, Options } from "./styled";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  animate: boolean;
}

export const LoginForm = ({ animate }: LoginFormProps) => {
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saveLogin, setSaveLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      // Se o usuário estiver logado, redireciona para a tela de personagens
      navigate("/personagens");
    }
  }, [navigate]);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    setShowRegister(false);
  };

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      toast.success("Login bem-sucedido!");

      // Salvar o estado de login se a opção "Salvar login" estiver marcada
      if (saveLogin) {
        localStorage.setItem("isLoggedIn", "true");
      }

      navigate("/personagens");
    } else {
      toast.error("Nome de usuário ou senha incorretos.");
    }
  };

  return (
    <Form animate={animate}>
      {showRegister ? (
        <>
          <TextWrapper>
            <h3>Crie uma nova conta!</h3>
          </TextWrapper>
          <Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button onClick={handleRegister}>Cadastrar</Button>
          <LinkWrapper>
            Já tem uma conta?
            <a href="#" onClick={() => setShowRegister(false)}>
              Faça Login
            </a>
          </LinkWrapper>
        </>
      ) : (
        <>
          <TextWrapper>
            <h3>Bem-vindo(a) de volta!</h3>
            <span>Acesse sua conta:</span>
          </TextWrapper>
          <Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Options>
            <CheckBox>
              <input
                type="checkbox"
                checked={saveLogin}
                onChange={(e) => setSaveLogin(e.target.checked)}
              />
              <label>Salvar login</label>
            </CheckBox>
            <a href="#">Esqueci a senha</a>
          </Options>
          <Button onClick={handleLogin}>Entrar</Button>
          <LinkWrapper>
            Ainda não tem o login?
            <a href="#" onClick={handleRegisterClick}>
              Cadastre-se
            </a>
          </LinkWrapper>
        </>
      )}
    </Form>
  );
};
