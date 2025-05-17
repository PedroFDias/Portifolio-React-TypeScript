import type Projeto from '../../types/Projeto';
import { useEffect, useRef, useState } from 'react';
import projetosJson from '../../data/projetos.json';
import Modal from 'react-modal';
import { BotaoLink } from '../BotaoLink';
import './Projetos.css';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';


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

                    {projetosJson.map((projeto: Projeto) => (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: .3 }}
                            className="projeto" key={projeto.id}>
                            <h4>{projeto.titulo}</h4>
                            <img src={projeto.images[0]} alt={projeto.titulo} />
                            <div className="linkIcons">
                                <BotaoLink link={projeto.link} icon="bi bi-github" />
                                <a onClick={() => openModal(projeto)} className="saiba-mais"><span>Saiba-mais</span><i className="bi bi-info-circle"></i></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {domPronto &&
                <Modal isOpen={aberto} onRequestClose={closeModal} className="meu-modal" overlayClassName="Fundo">
                    <button className="modal-close" aria-label="Fechar modal" onClick={closeModal}>✕</button>
                    <h4 id="modal-title">{selecionado?.titulo}</h4>

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
                    >
                        {selecionado?.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} style={{ width: '100%', height: 'auto' }} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p id="modal-description">{selecionado?.descricao}</p>
                    <p id="participacao">{selecionado?.participacao}</p>
                    <p id="tecnologias">{selecionado?.tecnologias}</p>
                </Modal>
            }
        </div>
    );
}