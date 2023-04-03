import { Container, Brand, Menu, Content } from "./styles";

import { Header } from "../../../components/Header";

import { MdOutlinePersonOutline } from "react-icons/md";

import { Input } from "../../../components/Input";

import { ButtonText } from "../../../components/ButtonText";

import { Button } from "../../../components/Button";

export function EditUser() {
  return (
    <Content>
      <ButtonText title="Editar Usuário" />
      <form>
        <Input placeholder="Nome Completo " icon={MdOutlinePersonOutline} />
        <Input placeholder="Nome Completo " />
        <Button type="submit" title="Editar Usuário" />
      </form>
    </Content>
  );
}
