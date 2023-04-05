import { Container, Brand, Menu, Content } from "./styles";

import { Header } from "../../../components/Header";

import { MdOutlinePersonOutline } from "react-icons/md";

import { Input } from "../../../components/Input";

import { ButtonText } from "../../../components/ButtonText";

import { Button } from "../../../components/Button";
import { SideBar } from "../../../components/SideBar";

export function NewUser() {
  return (
    <Content>
      <ButtonText title="Novo Usuário" />
      <form>
        <Input placeholder="Nome Completo " icon={MdOutlinePersonOutline} />
        <Input placeholder="Nome Completo " />
        <Input placeholder="Nome Completo " />
        <Button type="submit" title="Criar Usuário" />
      </form>
    </Content>
  );
}
