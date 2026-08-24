import './SobreMim.css';
import { motion } from "framer-motion";

export function SobreMim() {

    return (
        <div id="sobreMim" className="fundo-section">
            <div className="sobre-mim container">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
                    viewport={{ once: true, amount: .2 }}
                    className="info">
                    <h2>Sobre mim</h2>
                    <p>Sou Analista de Sistemas, com experiência em desenvolvimento backend e frontend. Trabalho com <span className="tec1">&lt;Java + Spring&gt;</span>, <span className="tec3">&lt;TypeScript + React&gt;</span>, PostgreSQL, MySQL e MongoDB, além de ter familiaridade com metodologias ágeis como o Scrum. Tenho experiência acadêmica e pessoal com API's REST, integração com bancos, consumo de APIs externas e sistemas CRUD.</p>
                    <img src="imagens/desenvolvedor.webp" alt="" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
                    viewport={{ once: true, amount: 1 }}
                    className="tecno">
                    <h2>Tecnologias</h2>
                    <div className="carrossel">
                        <div className="swiper">
                            <img src="imagens/tecnologias/javaEscrita.webp" title="Java" />
                            <img src="imagens/tecnologias/spring.svg" title="Spring" />
                            <img src="imagens/tecnologias/js.webp" title="JavaScript" />
                            <img src="imagens/tecnologias/node.webp" title="Node.js" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" title='TypeScript'/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title='React'/>
                            <img src="imagens/tecnologias/c-sharp (1).webp" title="C#" />
                            <img src="imagens/tecnologias/git.webp" title="Git" />
                            <img src="imagens/tecnologias/bootstrap.webp" title="Bootstrap" />
                            <img src="imagens/tecnologias/cloudinary-1.svg" title="Bootstrap" />

                            <img src="imagens/tecnologias/javaEscrita.webp" title="Java" />
                            <img src="imagens/tecnologias/spring.svg" title="Spring" />
                            <img src="imagens/tecnologias/js.webp" title="Java Script" />
                            <img src="imagens/tecnologias/node.webp" title="Node.js" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" title='TypeScript'/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title='React'/>
                            <img src="imagens/tecnologias/c-sharp (1).webp" title="C#" />
                            <img src="imagens/tecnologias/git.webp" title="Git" />
                            <img src="imagens/tecnologias/bootstrap.webp" title="Bootstrap" />
                            <img src="imagens/tecnologias/cloudinary-1.svg" title="Bootstrap" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}