import { useState } from 'react'

import { Container, Form } from "./styles.js"
import { Input } from '../../components/Input'

import { MdOutlinePersonOutline } from 'react-icons/md'

import { Button } from "../../components/Button"

import { Link } from 'react-router-dom'

import { useAuth } from "../../hooks/auth"

export function SignIn() {

  const {username, setUsername} = useState("")
  const {password, setPassword} = useState("")

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ username, password })
  }

  return (
    <Container>
      <h1>Fecularia Pirangunho</h1>
      <Form>
          <h1> Entrar </h1>
          <p>Insira suas credenciais para acessar o portal</p>

          <Input 
          placeholder="Usuário" 
          type="text" 
          icon={MdOutlinePersonOutline} 
          onChange = {e => setUsername(e.target.value)}
          />
          <Input 
          placeholder="Senha" 
          type="text" 
          icon={MdOutlinePersonOutline} 
          onChange = {e => setPassword(e.target.value)}
          />
        <Button title="Entrar" onClick={handleSignIn} />
          
      </Form>

    </Container>
  )
}