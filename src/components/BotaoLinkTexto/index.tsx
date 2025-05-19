import './BotaoLinkTexto.css';

export default function BotaoLinkTexto (props : {link?:string , texto:string, cor: string, icon: string}){
    return (
        <a href={props.link} style={{backgroundColor: props.cor, fontSize:"1vw"}} className='btn botaoRedirecionar'><i className={props.icon}></i>{props.texto}</a>
    );
}