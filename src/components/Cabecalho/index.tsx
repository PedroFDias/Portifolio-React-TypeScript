import { useEffect, useState } from 'react';
import './Cabecalho.css'

export function Header() {

    const [scrolled, setScroll] = useState(false);

    useEffect(() => {
        const Scrolled = () => {
            setScroll(window.scrollY > 0);
        }

        window.addEventListener("scroll", Scrolled);

        return () => {
            window.removeEventListener("scroll", Scrolled); // cleanup
        };
    })

    return (
        <header className={`cabecalho ${scrolled ? "cabecalhoScroll" : ''}`}>
            <div className="container">
                <div className="header">
                    <a className="nome" href="index.html"><strong>Pedro Dias</strong></a>
                    <button className="hamburguer"></button>
                    <nav className="menu">
                        <a href="#sobreMim">Sobre Mim</a>
                        <a href="#meusProjetos">Projetos</a>
                        <a href="#sessaoContato">Contato</a>
                        <p className="direitos">© 2025 Pedro Dias. Todos os direitos reservados.</p>
                    </nav>
                </div>
            </div>
        </header>
    );
}