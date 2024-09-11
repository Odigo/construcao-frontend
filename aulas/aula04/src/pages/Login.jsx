import BotaoSubmit from "../components/BotaoSubmit";
import InputSenha from "../components/InputSenha";
import Conteudo from "../components/Conteudo";
import InputUsuario from "../components/InputUsuario";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";
import "./Login.css";

function Login() {
    const urlLogo= "https://www.svgrepo.com/show/489120/school.svg"
    const textoLogo = "Logo da Aplicação"
    return (
      <>
        <Conteudo className="login-form">
          <Logo imagem={urlLogo} texto={textoLogo} />
          <Titulo texto="Aluno Online" />
          <InputUsuario />
          <InputSenha />
          <BotaoSubmit texto="Entrar" />
          <Link texto="Esqueceu a Senha" />
          <Link texto="Criar uma Conta" />
        </Conteudo>
        <Rodape />
      </>
    );
}

export default Login;