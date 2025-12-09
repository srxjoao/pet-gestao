export class AnimalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AnimalError";
  }
}

export class AnimalNaoEncontradoError extends AnimalError {
  constructor(id: number) {
    super(`Animal com ID ${id} não encontrado ou não está com consulta agendada.`);
    this.name = "AnimalNaoEncontradoError";
  }
}

export class DadosInvalidosError extends AnimalError {
  constructor(campo: string) {
    super(`Dados inválidos: ${campo}.`);
    this.name = "DadosInvalidosError";
  }
}
