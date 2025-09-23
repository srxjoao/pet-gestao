import Animal from "./Animal"
export default class Consulta{
    id: number
    tipoConsulta: string
    petId: number
    veterinario: string 
    animais: Animal[] = [];

    constructor(id:number, tipoConsulta:string, petId:number,veterinario:string){
        this.id = id
        this.tipoConsulta = tipoConsulta
        this.petId = petId
        this.veterinario = veterinario
    }

    registarConsulta():void{
        this.animais.forEach((animal)=> animal.registrarConsulta());
    }
}