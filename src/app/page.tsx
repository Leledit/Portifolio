import { Menu } from "./components/menu";
import { About } from "./components/about";
import { Apresentation } from "./components/apresentation";
import { Project } from "./components/project";
import { Technologies } from "./components/technologies";
import { Contato } from "./components/contato";
import { Footer } from "./components/rodape";

export default function Home() {
  return (
    <div>
      <Menu />
      <Apresentation />
      <Project />
      <About />
      <Technologies />
      <Contato />
      <Footer />
    </div>
  );
}
