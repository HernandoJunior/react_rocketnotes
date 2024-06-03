import { Container, Links, Content } from "./style.js"
import { Button } from "../../components/Button/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { Tag } from "../../components/Tag/index.jsx";

export function Details(){
  return (
    <Container>
        <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam, quasi temporibus et, necessitatibus autem tenetur nemo voluptates ducimus explicabo voluptatibus in, fugiat modi eum placeat praesentium sunt aut numquam.
          </p>
          <Section title="Links úteis">
            <Links>
              <li><a href="https://github.com/HernandoJunior" target="_blank"><FaGithub/> Github</a></li>
              <li><a href="https://www.linkedin.com/in/hernandojunior/"><FaLinkedinIn/> Linkedin</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>
          <Button title= "Voltar" />
        </Content>
      </main>
    </Container>
  )
}