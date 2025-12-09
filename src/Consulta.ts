import Animal from "./Animal";
import Dono from "./Dono";

export default class Consulta {
  public id: number; // único privado

  public tipoConsulta: string;
  public veterinario: string;
  public animal: Animal;
  public tutor: Dono;
  public data: string;
  public hora: string;

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