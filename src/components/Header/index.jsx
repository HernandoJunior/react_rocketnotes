import { Container, Profile, Logout } from "./style";
import { RxExit } from "react-icons/rx";
export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/hernandojunior.png"    alt="Imagem de perfil de Hernando"/>
        <div>
          <span>Bem vindo,</span>
          <strong>Hernando Junior</strong>
        </div>
      </Profile>
      <Logout>
        <RxExit />
      </Logout>
    </Container>
  )
}