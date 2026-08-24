export default interface Experiencia {
  id: number;
  cargo: string;
  empresa: string;
  inicio: string;
  fim: string | null;
  atual: boolean;
  localizacao?: string;
  modalidade?: string;
  projeto?: string;
  descricao: string;
  responsabilidades: string[];
  tecnologias: string[];
}
