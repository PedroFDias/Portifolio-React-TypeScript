import './SobreMim.css';
import { motion } from "framer-motion";

export function SobreMim() {

    return (
        <div id="sobreMim" className="fundo-section">
            <div className="sobre-mim container">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
                    viewport={{ once: false, amount: .4 }}
                    className="info">
                    <h2>Sobre mim</h2>
                    <p>Sou um desenvolvedor em formação, apaixonado por backend e pela criação de soluções que conectam
                        dados a pessoas. Tenho experiência acadêmica com APIs RESTful, integração de bancos relacionais,
                        consumo de APIs externas e sistemas CRUD. Trabalho com Java, Spring Boot, JavaScript, HTML/CSS,
                        PostgreSQL e MySQL. Também tenho familiaridade com metodologias ágeis como Scrum.</p>
                    <img src="../public/imagens/desenvolvedor.png" alt="" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
                    viewport={{ once: false, amount: .4}}
                    className="tecno">
                    <h2>Tecnologias</h2>
                    <div className="carrossel">
                        <div className="swiper">
                            <img src="../public/imagens/tecnologias/javaEscrita.webp" title="Java" />
                            <img src="../public/imagens/tecnologias/spring.svg" title="Spring" />
                            <img src="../public/imagens/tecnologias/js.png" title="JavaScript" />
                            <img src="../public/imagens/tecnologias/node.png" title="Node.js" />
                            <img src="../public/imagens/tecnologias/c-sharp (1).png" title="C#" />
                            <img src="../public/imagens/tecnologias/git.png" title="Git" />
                            <img src="../public/imagens/tecnologias/bootstrap.png" title="Bootstrap" />
                            <img src="../public/imagens/tecnologias/cloudinary-1.svg" title="Bootstrap" />

                            <img src="../public/imagens/tecnologias/javaEscrita.webp" title="Java" />
                            <img src="../public/imagens/tecnologias/spring.svg" title="Spring" />
                            <img src="../public/imagens/tecnologias/js.png" title="Java Script" />
                            <img src="../public/imagens/tecnologias/node.png" title="Node.js" />
                            <img src="../public/imagens/tecnologias/c-sharp (1).png" title="C#" />
                            <img src="../public/imagens/tecnologias/git.png" title="Git" />
                            <img src="../public/imagens/tecnologias/bootstrap.png" title="Bootstrap" />
                            <img src="../public/imagens/tecnologias/cloudinary-1.svg" title="Bootstrap" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}