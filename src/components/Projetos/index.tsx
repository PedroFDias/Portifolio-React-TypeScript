import { useEffect, useRef, useState } from 'react';
import projetosJson from '../../data/projetos.json';
import Modal from 'react-modal';
import './Projetos.css';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import type Projeto from '../../types/Projeto';


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
                viewport={{ once: true, amount: 0.2 }}
                className="MeusProjetos container">
                <div className="secao-cabecalho">
                    <h2 className="Titulo">Meus Projetos</h2>
                    <p className="secao-subtitulo">
                        Trabalhos práticos de backend e full-stack, com APIs, autenticação e interfaces em React.
                    </p>
                </div>
                <div id="projetos" className="projetos">

                    {projetosJson.map((projeto) => (
                        <motion.article
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: true, amount: .5 }}
                            className="projeto"
                            key={projeto.id}>
                            <div className="projeto-imagem">
                                <img src={projeto.images[0]} alt={projeto.titulo} />
                            </div>
                            <h3 className="projeto-titulo">{projeto.titulo}</h3>
                            <ul className="projeto-chips">
                                {projeto.tecnologias.slice(0, 4).map((tec) => (
                                    <li key={tec}>{tec}</li>
                                ))}
                            </ul>
                            <div className="linkIcons">
                                <a
                                    href={projeto.linkGit}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                    aria-label={`Ver ${projeto.titulo} no GitHub`}
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                                <button
                                    type="button"
                                    onClick={() => openModal(projeto)}
                                    className="saiba-mais"
                                >
                                    <span>Saiba mais</span>
                                    <i className="bi bi-info-circle"></i>
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
            {domPronto &&
                <Modal
                    isOpen={aberto}
                    onRequestClose={closeModal}
                    className="meu-modal"
                    overlayClassName="Fundo"
                    contentLabel={selecionado?.titulo ?? 'Detalhes do projeto'}
                    parentSelector={() => document.documentElement}
                >
                    <button className="modal-close" aria-label="Fechar modal" onClick={closeModal}>✕</button>

                    <div className="carroselDiv">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            pagination={{ clickable: true }}
                            className='carrosel'
                        >
                            {selecionado?.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`${selecionado.titulo} — captura ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='info'>
                        <h3 id="modal-title">{selecionado?.titulo}</h3>
                        <div id="modal-description">
                            <p className="info-label">Resumo</p>
                            <p>{selecionado?.descricao}</p>
                        </div>
                        <div id="participacao">
                            <p className="info-label">Minhas responsabilidades</p>
                            <ul>
                                {selecionado?.participacao.map((func, index: number) => (
                                    <li key={index}>{func}</li>
                                ))}
                            </ul>
                        </div>

                        <div id="tecnologias">
                            <p className="info-label">Tecnologias</p>
                            <div className="divTecs">
                                {selecionado?.tecnologias.map((tec, index: number) => (
                                    <span key={tec} className={`tec tec-${(index % 8) + 1}`}>{tec}</span>
                                ))}
                            </div>
                        </div>
                        <div className='botoesLinks'>
                            <a
                                href={selecionado?.linkGit}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn botaoRedirecionar github-modal"
                            >
                                <i className="bi bi-github"></i>
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
}
