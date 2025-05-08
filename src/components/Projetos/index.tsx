import type { Projeto } from '../../types/Projeto';
import { useState } from 'react';
import projetosJson from '../../data/projetos.json';
import Modal from 'react-modal';
import { BotaoLink } from '../BotaoLink';
import './Projetos.css';

Modal.setAppElement('#root');

export function Projeto() {

    const [aberto, setModalAberto] = useState(false);
    const [selecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

    const openModal = (project: Projeto) => {
        setProjetoSelecionado(project);
        setModalAberto(true);
    };

    const closeModal = () => {
        setModalAberto(false);
        setProjetoSelecionado(null);
    };

    return (
        <div id="MeusProjetos" className="fundo-section" >
            <div className="MeusProjetos container">
                <a className="Titulo" href="">Meus<span>Projetos</span></a>
                <div id="projetos" className="projetos">

                    {projetosJson.map((projeto: Projeto) => (
                        <div className="projeto" key={projeto.id}>
                            <h4>{projeto.titulo}</h4>
                            <img src={projeto.images[0]} alt={projeto.titulo} />
                            <div className="linkIcons">
                                <BotaoLink link={projeto.link} icon="bi bi-github" />
                                <a onClick={() => openModal(projeto)} className="saiba-mais"><span>Saiba-mais</span><i className="bi bi-info-circle"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={aberto} onRequestClose={closeModal} className="meu-modal" overlayClassName="Fundo">
                <button className="modal-close" aria-label="Fechar modal" onClick={closeModal}>✕</button>
                <h4 id="modal-title">{selecionado?.titulo}</h4>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div id="carrosel" className="carousel-inner">
                        {selecionado?.images.map((img: string, index: number) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ' '}`} key={index}>
                                <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <p id="modal-description">{selecionado?.descricao}</p>
                <p id="participacao">{selecionado?.participacao}</p>
                <p id="tecnologias">{selecionado?.tecnologias}</p>

            </Modal>
        </div>
    );
}
