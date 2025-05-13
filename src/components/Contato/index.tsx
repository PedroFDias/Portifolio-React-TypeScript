import './Contato.css';

export default function Contato(){

    return(
        <div className="Contato">
            <div className="conteudo container">
                <div>
                    <h2 className="Titulo">Contatos</h2>
                </div>
                <div className="Contatos">
                    <a href="https://wa.me/31989090902"><i className="bi bi-whatsapp"> (31) 98909-0902</i></a>
                    <a href="mailto:phf.dias.2022@gmail.com"><i
                            className="bi bi-envelope-at">phf.dias.2022@gmail.com</i></a>
                    <a href="http://www.linkedin.com/in/pedrofdias"><i className="bi bi-linkedin"> pedrofdias</i></a>

                    <a><i className="bi bi-instagram"> pedrofdias</i></a>
                </div>
                <img className='mergulhadora' src="../../public/imagens/mergulhadora2.png" alt="" />
            </div>
        </div>
    );
}