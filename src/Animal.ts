import { DadosInvalidosError } from "./errors/AnimalError"
export default class Animal {
  public id: number;   // único atributo privado

  public nome: string;
  public raca: string;
  public vacinado: boolean;
  public tratamento: string;

  constructor(
    id: number,
    nome: string,
    raca: string,
    vacinado: boolean,
    tratamento: string
  ) {
    if (id <= 0) {
      throw new DadosInvalidosError("ID deve ser maior que zero.")
    };
    if (!nome || nome.trim().length === 0){
      throw new DadosInvalidosError("O campo de nome não pode estar vazio.")
    }
    this.id = id;
    this.nome = nome;
    this.raca = raca;
    this.vacinado = vacinado;
    this.tratamento = tratamento;
  }
}
