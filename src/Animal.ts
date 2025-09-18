export default class Animal{
    id: number
    nome: string
    raca:  string
    tratamento: string
    vacinado: boolean
    
    constructor(id:number, nome:string, raca:string,vacinado:boolean, tratamento:string){
        this.id = id
        this.nome = nome
        this.raca = raca
        this.tratamento = tratamento
        this.vacinado = vacinado
    }
}