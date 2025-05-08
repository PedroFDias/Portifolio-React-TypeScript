import './cabecalho.css';

export function Header() {
    return (
        <header id="cabecalho">
        <div className="container">
            <div className="header">
                <a id="nome" href="index.html"><strong>Pedro Dias</strong></a>
                <button className="hamburguer"></button>
                <nav id="menu">
                    <a href="">Inicio</a>
                    <a href="#MeusProjetos">Projetos</a>
                    <a href="#Contato">Contato</a>
                    <p className="direitos">© 2025 Pedro Dias. Todos os direitos reservados.</p>
                </nav>
            </div>
        </div>
    </header>
    );
}