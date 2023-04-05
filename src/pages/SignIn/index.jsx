import { useState } from "react";

import { Container, Form } from "./styles.js";

import { MdLockOutline, MdOutlinePersonOutline } from "react-icons/md";

import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function handleSignIn(event) {
    // prevent default
    event.preventDefault();
    await signIn({ username, password });
  }

  return (
    <Container>
      <h1 className="text-white">Fecularia Pirangunho</h1>
      <Form onSubmit={handleSignIn}>
        <h1> Entrar </h1>
        <p>Insira suas credenciais para acessar o portal</p>

        <InputGroup>
          <InputLeftElement
            fontSize="1.5rem"
            pointerEvents="none"
            children={<MdOutlinePersonOutline color="gray.300" />}
          />
          <Input
            size="lg"
            mb="1rem"
            placeholder="Usuário"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<MdLockOutline color="gray.300" />}
          />
          <Input
            size="lg"
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Button title="Entrar" type="submit" />
      </Form>
    </Container>
  );
}
