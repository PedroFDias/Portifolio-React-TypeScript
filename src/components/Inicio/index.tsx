import { ReactTyped } from "react-typed"
import { BotaoLink } from '../BotaoLink';
import './Inicio.css';

export function Inicio() {
    return (
        <div id="inicio" className="container">
            <div className="container" id="apresentacao">
                <div className="apresentacao">
                    <div className="apresentacao-script">
                        <h6>Olá, eu me chamo</h6>
                        <h1>Pedro Dias</h1>
                        <h3>E sou <span className="text">
                            <ReactTyped
                                strings={['Desenvolvedor de Software', 'Estudante de Programação']}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </span> </h3>
                        <div className="resumo">
                            <p>Atualmente cursando Análise e Desenvolvimento de Sistemas na PUC-Minas, com foco em
                                desenvolvimento backend e experiências em projetos práticos.
                            </p>
                        </div>
                    </div>
                    <div id="linksIcons">
                        <BotaoLink link="https://github.com/PedroFDias" icon="bi bi-github" />
                        <BotaoLink link="http://www.linkedin.com/in/pedrofdias" icon="bi bi-linkedin" />
                    </div>
                    <div className="circulo-fora">
                        <div id="imagemPerfil" className="circulo-dentro">
                            <img id="imgPerfil" src="../../public/imagens/perfil2.png" alt="Foto de Perfil" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                    <a className="maisSobre" href="">Mais Sobre mim</a>
                </div>
            </div>
        </div>
    );
}