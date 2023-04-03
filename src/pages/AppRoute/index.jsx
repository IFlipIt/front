import { AppRoutes } from "../../routes/app.routes";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { Brand, Container, Content } from "./styles";

export function AppRoutesComponent() {
  console.log("AppRoutesComponent");
  return (
    <Container>
      <Brand />
      <Header />
      <SideBar />
      <Content>
        <AppRoutes />
      </Content>
    </Container>
  );
}
