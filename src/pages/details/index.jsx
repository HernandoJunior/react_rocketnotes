import { Container } from "./style.js"
import { Button } from "../../components/Button/index.jsx"

export function Details(){
  return (
    <Container>
      <h1>Hernando Junior</h1>
      <span>ReactJS</span>
      <Button title= "Entrar" />
      <Button title= "Cadastrar" />
      <Button title= "Voltar" />
    </Container>
  )
}

