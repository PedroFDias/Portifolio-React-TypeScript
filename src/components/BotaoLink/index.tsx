import './Botao.css';

type BotaoLinkProps = {
    link: string;
    icon: string;
  };

export function BotaoLink ({link , icon} : BotaoLinkProps) {
    return (
        <a href={link}><i className={icon}></i></a>
    ); 
}