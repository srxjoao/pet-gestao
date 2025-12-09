export default class Dono {
  public  id: number; // único atributo privado

  public nome: string;
  public contato: string;

  constructor(id: number, nome: string, contato: string) {
    this.id = id;
    this.nome = nome;
    this.contato = contato;
  }
}
