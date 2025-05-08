import { Header } from './components/Cabecalho';
import { Inicio } from './components/Inicio';
import { SobreMim } from './components/SobreMim';
import { Projeto } from './components/Projetos';


function App() {

  return (
    <>
      <Header />
      <Inicio />
      <SobreMim/>
      <Projeto/>
    </>
  )
}

export default App
