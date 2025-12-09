import Consulta from "./Consulta";

export default class RelatorioConsulta {
  static gerarRelatorioConsultas(consultas: Consulta[]): void {
    console.log("Relatório de Consultas - Clinica João Peter Animal");

    if (consultas.length === 0) {
      console.log("Nenhuma consulta encontrada para gerar relatório.");
      return;
    }

    consultas.forEach((consulta) => {
      console.log(
        `ID Consulta: ${consulta.id} | Tipo: ${consulta.tipoConsulta} | Veterinário: ${consulta.veterinario}\n` +
          `Animal: ${consulta.animal.nome} (${consulta.animal.raca}) | Tutor: ${consulta.tutor.nome}\n` +
          `Procedimento: ${consulta.animal.tratamento} | Vacinado: ${
            consulta.animal.vacinado ? "Sim" : "Não"
          }\n` +
          `Data: ${consulta.data} | Hora: ${consulta.hora}\n`
      );
    });
  }
}
