import { Header } from "./componentes/Header/index";
import { ListaDeLembretes } from "./componentes/ListaDeLembretes/index";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <ListaDeLembretes />
    </>
  );
}
