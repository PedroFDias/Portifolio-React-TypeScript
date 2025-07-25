import { ReactTyped } from "react-typed"
import { BotaoLink } from '../BotaoLink';
import './Inicio.css';
import { motion } from "framer-motion";

export function Inicio() {
    return (
        <div id="inicio" className="container">
            <div className="container" id="apresentacao">
                <div className="apresentacao">
                    <div className="apresentacao-script">
                        <motion.h6
                            initial={{ scale: 1.12, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Olá, eu me chamo
                        </motion.h6>
                        <motion.h1
                            initial={{ scale: 1.12, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}                       >
                            Pedro Dias
                        </motion.h1>
                        <motion.h3
                            initial={{ scale: 1.12, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            E sou&nbsp;
                            <span className="text">
                                <ReactTyped
                                    strings={[' desenvolvedor Java', 'desenvolvedor Back-end', 'aspirante Full-Stack', 'apaixonado por tecnologia']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </span> </motion.h3>
                    </div>
                    <motion.div
                        initial={{ scale: 1.12, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="resumo">
                        <p>Atualmente cursando Análise e Desenvolvimento de Sistemas na PUC-Minas, com foco em
                            desenvolvimento backend e experiências em projetos práticos.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        id="linksIcons">
                        <BotaoLink link="https://github.com/PedroFDias" icon="bi bi-github" />
                        <BotaoLink link="http://www.linkedin.com/in/pedrofdias" icon="bi bi-linkedin" />
                    </motion.div>
                    <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="circulo-fora">
                        <div id="imagemPerfil" className="circulo-dentro">
                            <img id="imgPerfil" src="imagens/perfil2.png" alt="Foto de Perfil" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </motion.div>
                    <motion.a
                        initial={{ x:-10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="maisSobre" href="#sobreMim">Mais Sobre mim</motion.a>
                </div>
            </div>
        </div>
    );
}