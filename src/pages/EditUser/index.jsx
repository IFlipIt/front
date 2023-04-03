import { Container, Brand, Menu, Content } from './styles'

import { Header } from '../../components/Header'

import { MdOutlinePersonOutline } from 'react-icons/md'

import { Input } from '../../components/Input'

import { ButtonText } from '../../components/ButtonText'

import { Button } from '../../components/Button'

export function EditUser(){
    return(
        <Container>
        <Brand>
        
        </Brand>

        <Header />

        <Menu>
            <li><button type="button"> <MdOutlinePersonOutline /> Produtos </button></li>
            <li><button type="button"> <MdOutlinePersonOutline /> Pedidos </button></li>
            <li><button type="button"> <MdOutlinePersonOutline /> Usuários </button></li>
            <li><button type="button"> <MdOutlinePersonOutline /> Clientes </button></li>
            
        </Menu>

        <Content>
            <ButtonText title="Editar Usuário"/>
            <form>
            <Input placeholder="Nome Completo " icon={MdOutlinePersonOutline} />
            <Input placeholder="Nome Completo "/>
            <Button type="submit" title="Editar Usuário"/>
            </form>
        </Content>

        </Container>
    )
}