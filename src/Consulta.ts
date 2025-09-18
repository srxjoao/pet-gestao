export default class Consulta{
    id: number
    tipoConsulta: string
    petId: number
    veterinario: string 

    constructor(id:number, tipoConsulta:string, petId:number,veterinario:string){
        this.id = id
        this.tipoConsulta = tipoConsulta
        this.petId = petId
        this.veterinario = veterinario
    }
}