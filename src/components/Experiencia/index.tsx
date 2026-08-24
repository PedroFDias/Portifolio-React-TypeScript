import experienciasJson from '../../data/experiencias.json';
import type Experiencia from '../../types/Experiencia';
import { motion, useReducedMotion } from 'framer-motion';
import './Experiencia.css';

const experiencias = experienciasJson as Experiencia[];

function rotuloPeriodo(experiencia: Experiencia) {
    return experiencia.fim === null
        ? `${experiencia.inicio} — Atual`
        : `${experiencia.inicio} — ${experiencia.fim}`;
}

function metaLocal(experiencia: Experiencia) {
    return [experiencia.localizacao, experiencia.modalidade]
        .filter(Boolean)
        .join(' · ');
}

export function Experiencia() {
    const reduzirMovimento = useReducedMotion();
    const entrada = reduzirMovimento
        ? { initial: false as const, animate: undefined }
        : {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0, transition: { duration: 1 } },
            viewport: { once: true, amount: 0.2 },
        };

    return (
        <div id="experiencia" className="fundo-section">
            <div className="experiencia container">
                <motion.div {...entrada} className="secao-cabecalho">
                    <h2 className="Titulo">Experiência</h2>
                    <p className="secao-subtitulo">
                        Trajetória profissional em desenvolvimento de software, com foco em backend, APIs e integração de sistemas.
                    </p>
                </motion.div>

                <ol className="timeline">
                    {experiencias.map((experiencia, index) => {
                        const meta = metaLocal(experiencia);

                        return (
                            <motion.li
                                key={experiencia.id}
                                className={`timeline-item${experiencia.atual ? ' atual' : ''}`}
                                {...(reduzirMovimento
                                    ? {}
                                    : {
                                        initial: { opacity: 0, y: 15 },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.8, delay: index * 0.08 },
                                        },
                                        viewport: { once: true, amount: 0.25 },
                                    })}
                            >
                                <div className="timeline-meta">
                                    <p className="periodo">{rotuloPeriodo(experiencia)}</p>
                                    <h3 className="cargo">{experiencia.cargo}</h3>
                                    <p className="empresa">{experiencia.empresa}</p>
                                    {experiencia.projeto && (
                                        <p className="projeto">{experiencia.projeto}</p>
                                    )}
                                    {meta && <p className="meta">{meta}</p>}
                                    {experiencia.atual && (
                                        <span className="badge-atual">Atual</span>
                                    )}
                                </div>
                                <div className="timeline-axis" aria-hidden="true">
                                    <span className="timeline-marker" />
                                </div>
                                <article className="experiencia-card">
                                    <p className="descricao">{experiencia.descricao}</p>
                                    {experiencia.responsabilidades.length > 0 && (
                                        <ul className="responsabilidades">
                                            {experiencia.responsabilidades.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {experiencia.tecnologias.length > 0 && (
                                        <ul className="experiencia-chips">
                                            {experiencia.tecnologias.map((tec) => (
                                                <li key={tec}>{tec}</li>
                                            ))}
                                        </ul>
                                    )}
                                </article>
                            </motion.li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
