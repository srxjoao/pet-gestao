import Animal from "./Animal";
import Dono from "./Dono";

export default class Consulta {
    id: number;
    tipoConsulta: string;
    veterinario: string;
    animal: Animal;  // Apenas um animal por consulta
    tutor: Dono;
    data: string;    // Ex: "2025-10-06"
    hora: string;    // Ex: "14:30"

    constructor(
        id: number,
        tipoConsulta: string,
        animal: Animal,
        veterinario: string,
        tutor: Dono,
        data: string,
        hora: string
    ) {
        this.id = id;
        this.tipoConsulta = tipoConsulta;
        this.veterinario = veterinario;
        this.animal = animal;
        this.tutor = tutor;
        this.data = data;
        this.hora = hora;
    }
}
