export default class Animal{
    id: number
    nome: string
    raca:  string
    vacinado: boolean
    tratamento: string
    
    constructor(id:number, nome:string, raca:string,vacinado:boolean, tratamento:string){
        this.id = id
        this.nome = nome
        this.raca = raca
        this.tratamento = tratamento
        this.vacinado = vacinado
    }

    registrarConsulta():void{
        this.tratamento
        this.vacinado
        console.log(`${this.tratamento} teve uma consulta realizada e tomou vacina? ${this.vacinado}`)
    }

}