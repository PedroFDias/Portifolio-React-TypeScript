import { useEffect, useState } from 'react';
import './Cabecalho.css'

export function Header() {

    const [scrolled, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)

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
                    <a className="nome" href="#inicio"><strong>Pedro Dias</strong></a>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="hamburguer"></button>
                    <nav className={`menu ${menuOpen ? "ativo" : " "}`}>
                        <a href="#sobreMim">Sobre mim</a>
                        <a href="#meusProjetos">Projetos</a>
                        <a href="#sessaoContato">Contato</a>
                        <p className="direitos">© 2025 Pedro Dias. Todos os direitos reservados.</p>
                    </nav>
                </div>
            </div>
        </header>
    );
}