import './Footer.css';

export default function Footer() {

    return (
        <footer className="fundo-section-footer">
            <div className="footer container">
                <div className="div1">
                    <div>
                        <p>Desenvolvido com: <br/>ReactTS, TypeScript</p>
                    </div>
                    <div className="links">
                        <div>
                            <h4>Links Rapidos</h4>
                        </div>
                        <div>
                            <nav>
                                <a href="#inicio">Sobre</a>
                                <a href="#meusProjetos">Projetos</a>
                                <a href="#sessaoContato">Contato</a>
                            </nav>
                        </div>
                    </div>
                    <div className="icons">
                        <a href=""><i className="bi bi-github"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        <a href=""><i className="bi bi-envelope-at"></i></a>
                    </div>
                </div>
                <div className="div2">
                    <p>© 2025 Pedro Dias. Todos os direitos reservados.</p>
                </div>
            </div>
            <img className="mergulhadora" src="images/mergulhadora2.png" alt="" />
        </footer>

    );
}