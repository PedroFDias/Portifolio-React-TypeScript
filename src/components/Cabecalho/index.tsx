import { useEffect, useState } from 'react';
import './Cabecalho.css'

const LINKS = [
    { href: '#inicio', id: 'inicio', label: 'Início' },
    { href: '#sobreMim', id: 'sobreMim', label: 'Sobre' },
    { href: '#meusProjetos', id: 'meusProjetos', label: 'Projetos' },
    { href: '#sessaoContato', id: 'sessaoContato', label: 'Contato' },
] as const;

type SectionId = (typeof LINKS)[number]['id'];

export function Header() {

    const [scrolled, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [ativa, setAtiva] = useState<SectionId>('inicio');

    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY > 8);

            const offset = window.scrollY + 96;
            let current: SectionId = LINKS[0].id;

            for (const link of LINKS) {
                const section = document.getElementById(link.id);
                if (section && section.offsetTop <= offset) {
                    current = link.id;
                }
            }

            setAtiva(current);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <header className={`cabecalho ${scrolled ? 'cabecalhoScroll' : ''}`}>
            <div className="container">
                <div className="header">
                    <a className="logo" href="#inicio" onClick={() => setMenuOpen(false)} aria-label="Pedro Dias — início">
                        <img src="imagens/FavIcon3.ico" alt="Pedro Dias" />
                    </a>
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`hamburguer ${menuOpen ? 'aberto' : ''}`}
                        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav className={`menu ${menuOpen ? 'menu-aberto' : ''}`} aria-label="Principal">
                        {LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={ativa === link.id ? 'ativo' : ''}
                                aria-current={ativa === link.id ? 'page' : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <p className="direitos">© 2025 Pedro Dias. Todos os direitos reservados.</p>
                    </nav>
                </div>
            </div>
        </header>
    );
}
