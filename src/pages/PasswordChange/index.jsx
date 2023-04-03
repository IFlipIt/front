import { Container, Form } from "./styles.js"

import { Input } from '../../components/Input'

import { MdOutlinePersonOutline } from 'react-icons/md'

import { Button } from "../../components/Button"



export function PasswordChange() {

  

  return (
    <Container>
      <h1>Fecularia Pirangunho</h1>
      <Form>
          <h1> Redefinição de Senha </h1>
          <p>Insira sua nova senha para acessar o portal</p>

          <Input placeholder="Usuário" type="text" icon={MdOutlinePersonOutline} />
          <Input placeholder="Senha" type="text" icon={MdOutlinePersonOutline} />
        <Button type="submit" title="Entrar"/>
          
      </Form>

    </Container>
  )
}