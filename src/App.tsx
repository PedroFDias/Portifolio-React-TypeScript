import { Header } from './components/Cabecalho';
import { Inicio } from './components/Inicio';
import { SobreMim } from './components/SobreMim';
import { Projeto } from './components/Projetos';
import Contato from './components/Contato'
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Header />
      <Inicio />
      <SobreMim/>
      <Projeto/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
