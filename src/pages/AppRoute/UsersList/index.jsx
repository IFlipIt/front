import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";

import {
  AiOutlineCheckSquare,
  AiOutlineCloseSquare,
  AiFillDelete,
  AiOutlineUserAdd,
  AiFillEdit,
} from "react-icons/ai";

import { SmallButton } from "../../../components/SmallButton";

import {
  ActionsContainer,
  ButtonText,
  Container,
  Content,
  FilterContainer,
  Footer,
  Header,
} from "./styles";
import { Pagination } from "antd";

const columns = [
  {
    title: "Nome",
    dataIndex: "name",
  },
  {
    title: "Nome Usuário",
    dataIndex: "username",
  },
  {
    title: "Posição",
    dataIndex: "role",
  },
  {
    title: "Criado em",
    dataIndex: "created_at",
  },
  {
    title: "Ações",
    dataIndex: "actions",
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: `${i}`,
    name: `Edrward ${i}`,
    username: `edrward${i}`,
    role: `Administrador`,
    created_at: `01/01/2021`,
    actions: `Editar`,
  });
}

export function UsersList() {
  const [checkedCheckbox, setCheckedCheckbox] = useState("");

  function handleCheckboxChange(e) {
    const { checked, value } = e.target;
    if (checked) {
      setCheckedCheckbox(value);
    } else {
      setCheckedCheckbox("");
    }
  }

  console.log(checkedCheckbox);

  return (
    <Container>
      <Header>
        <FilterContainer>
          <SmallButton>
            <AiOutlineCheckSquare size={18} />
            <ButtonText>Ativo</ButtonText>
          </SmallButton>
          <SmallButton>
            <AiOutlineCloseSquare size={18} />
            <ButtonText>Desativado</ButtonText>
          </SmallButton>
        </FilterContainer>
        <ActionsContainer>
          <SmallButton>
            <AiOutlineUserAdd size={18} />
            <ButtonText>Adicionar</ButtonText>
          </SmallButton>
        </ActionsContainer>
      </Header>

      <Content className="h-96 overflow-y-auto">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>NOME</Th>
                <Th>NOME DE USUÁRIO</Th>
                <Th>POSIÇÃO</Th>
                <Th>CRIADO EM</Th>
                <Th>AÇÕES</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr key={item.key}>
                  <Td>{item.name}</Td>
                  <Td>{item.username}</Td>
                  <Td>{item.role}</Td>
                  <Td>{item.created_at}</Td>
                  <Td>
                    <ActionsContainer>
                      <IconButton
                        aria-label="Delete user"
                        icon={<AiFillDelete size={18} />}
                        className="mr-2"
                        variant="outline"
                      />
                      <IconButton
                        aria-label="Delete user"
                        icon={<AiFillEdit size={18} />}
                        variant="outline"
                      />
                    </ActionsContainer>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Content>
    </Container>
  );
}
