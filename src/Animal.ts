export default class Animal {
    id: number;
    nome: string;
    raca: string;
    vacinado: boolean;
    tratamento: string;
    
    constructor(id: number, nome: string, raca: string, vacinado: boolean, tratamento: string) {
        this.id = id;
        this.nome = nome;
        this.raca = raca;
        this.vacinado = vacinado;
        this.tratamento = tratamento;
    }
}
