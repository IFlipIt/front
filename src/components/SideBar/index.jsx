import { MdOutlinePersonOutline } from "react-icons/md";
import { Menu } from "./styles";

export function SideBar() {
  return (
    <Menu>
      <li>
        <button type="button">
          {" "}
          <MdOutlinePersonOutline /> Produtos{" "}
        </button>
      </li>
      <li>
        <button type="button">
          {" "}
          <MdOutlinePersonOutline /> Pedidos{" "}
        </button>
      </li>
      <li>
        <button type="button">
          {" "}
          <MdOutlinePersonOutline /> Usuários{" "}
        </button>
      </li>
      <li>
        <button type="button">
          {" "}
          <MdOutlinePersonOutline /> Clientes{" "}
        </button>
      </li>
    </Menu>
  );
}
