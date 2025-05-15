import './Contato.css';
import { motion } from "framer-motion";

export default function Contato() {

    return (
        <div id="sessaoContato" className="Contato">
            <div className="conteudo container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 1.5 } }}
                    viewport={{ once: false, amount: .2 }}
                >
                    <h2 className="Titulo">Contatos</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 1.5 } }}
                    viewport={{ once: false, amount: .2 }}
                    className="Contatos">
                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 1.5 } }}
                        viewport={{ once: false, amount: .2 }}
                        href="https://wa.me/31989090902"><i className="bi bi-whatsapp"> (31) 98909-0902</i></motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 1.5 } }}
                        viewport={{ once: false, amount: .2 }}
                        href="mailto:phf.dias.2022@gmail.com"><i
                            className="bi bi-envelope-at">phf.dias.2022@gmail.com</i></motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 1.5 } }}
                        viewport={{ once: false, amount: .2 }}
                        href="http://www.linkedin.com/in/pedrofdias"><i className="bi bi-linkedin"> pedrofdias</i></motion.a>

                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 1.5 } }}
                        viewport={{ once: false, amount: .2 }}
                    ><i className="bi bi-instagram"> pedrofdias</i></motion.a>
                </motion.div>
                <img className='mergulhadora' src="imagens/mergulhadora2.png" alt="" />
            </div>
        </div>
    );
}