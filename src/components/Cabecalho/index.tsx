import { useEffect, useState } from 'react';
import styles from './Cabecalho.module.css';

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
        <header className={`${styles.cabecalho} ${scrolled ? styles.cabecalhoScroll : ''}`}>
            <div className="container">
                <div className={styles.header}>
                    <a href='#inicio' className={styles.nome}>Pedro Dias</a>
                    <button className={styles.hamburguer}></button>
                    <nav className={styles.menu}>
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