import { Container, Links } from "./style.js"
import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { Tag } from "../../components/Tag/index.jsx";

export function Details(){
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li><a href="https://github.com/HernandoJunior" target="_blank"><FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/hernandojunior/"><FaLinkedinIn/></a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express"/>
        <Tag title="Node"/>
      </Section>
      <Button title= "Voltar" />
    </Container>
  )
}