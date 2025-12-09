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
    this.id = id;
    this.nome = nome;
    this.raca = raca;
    this.vacinado = vacinado;
    this.tratamento = tratamento;
  }
}
