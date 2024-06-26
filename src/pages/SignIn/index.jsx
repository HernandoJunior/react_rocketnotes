import { Container, Form, Background } from './style'
import {FiMail, FiLock} from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingIn(){
  return(
    <Container>
      <Form>

        <h1>SingIn</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input 
        placeholder='E-mail'
        type='email'
        icon= {FiMail}
        />

        <Input 
        placeholder='Senha'
        type='password'
        icon= {FiLock}
        />

        <Button title='Entrar'/>

        <Link to="/register">
          Criar Conta
        </Link>
      </Form>

      <Background/>
    </Container>
  )
}