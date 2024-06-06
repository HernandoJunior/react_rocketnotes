import { Container, Form } from './style'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'


export function NewNotes(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">
              Voltar
            </Link>
          </header>

          <Input placeholder="Titulo"/>

          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value= "https://rocketseat.com.br"/>
            <NoteItem value="" isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value= "React"/>
              <NoteItem value="" isNew placeholder="Nova Tag" />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}