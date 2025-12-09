import Animal from "./Animal";
import Dono from "./Dono";
import { ConsultaDuplicadoError } from "./errors/ConsultaError";

export default class Consulta {
  public id: number;
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
    hora: string,
    consultasExistentes: Consulta[] = []
  ) {

    const consultaDuplicada = consultasExistentes.some(
      (c) =>
        c.animal.id === animal.id &&
        c.data === data &&
        c.hora === hora
    );

    if (consultaDuplicada) {
      throw new ConsultaDuplicadoError(animal.id);
    }

    this.id = id;
    this.tipoConsulta = tipoConsulta;
    this.veterinario = veterinario;
    this.animal = animal;
    this.tutor = tutor;
    this.data = data;
    this.hora = hora;
  }
}
