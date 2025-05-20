import { useEffect, useRef, useState } from 'react';
import projetosJson from '../../data/projetos.json';
import Modal from 'react-modal';
import { BotaoLink } from '../BotaoLink';
import './Projetos.css';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import type Projeto from '../../types/Projeto';
import BotaoLinkTexto from '../BotaoLinkTexto'


Modal.setAppElement('#root');

export function Projeto() {

    const modalRef = useRef(null);

    const [domPronto, setDomPronto] = useState(false);
    const [aberto, setModalAberto] = useState(false);
    const [selecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

    useEffect(() => {
        setDomPronto(true);
    }, [])

    const openModal = (project: Projeto) => {
        setProjetoSelecionado(project);
        setModalAberto(true);
    };

    useEffect(() => {
        const body = document.body;

        if (aberto) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }, [aberto])

    const closeModal = () => {
        setModalAberto(false);
        setProjetoSelecionado(null);
    };

    return (
        <div id="meusProjetos" className="fundo-section" ref={modalRef}>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                className="MeusProjetos container">
                <a className="Titulo" href="">Meus<span>Projetos</span></a>
                <div id="projetos" className="projetos">

                    {projetosJson.map((projeto, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: .5 }}
                            className="projeto" key={index}>
                            <h4>{projeto.titulo}</h4>
                            <img src={projeto.images[0]} alt={projeto.titulo} />
                            <div className="linkIcons">
                                <BotaoLink link={projeto.linkGit} icon="bi bi-github" />
                                <a onClick={() => openModal(projeto)} className="saiba-mais"><span>Saiba-mais</span><i className="bi bi-info-circle"></i></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {domPronto &&
                <Modal isOpen={aberto} onRequestClose={closeModal} className="meu-modal" overlayClassName="Fundo">
                    <button className="modal-close" aria-label="Fechar modal" onClick={closeModal}>✕</button>

                    <div className="carroselDiv">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{ width: '100%', height: 'auto' }}
                            className='carrosel'
                        >
                            {selecionado?.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} style={{ width: '100%', height: 'auto' }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='info'>
                        <h4 id="modal-title"><span></span>{selecionado?.titulo}</h4>
                        <p id="modal-description"><span>Resumo:</span>{selecionado?.descricao}</p>
                        <p id="participacao"><span>Minhas responsabilidades:</span>
                            <ul>
                                {selecionado?.participacao.map((func, index: number) => (
                                    <li key={index}>{func}</li>
                                ))}
                            </ul>
                        </p>

                        <p id="tecnologias"><span>Tecnologias:</span>
                            <div className="divTecs">
                                {selecionado?.tecnologias.map((tec, index: number) => (
                                    <button type="button" className={`btn tec-${index + 1}`}>{tec}</button>
                                ))}
                            </div>
                        </p>
                        <div className='botoesLinks'>
                            <BotaoLinkTexto icon="bi bi-github" cor="#00464d" link={selecionado?.linkGit} texto="Ver no GitHub"></BotaoLinkTexto>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
}