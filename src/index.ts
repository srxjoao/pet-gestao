import Animal from "./Animal";
import Dono from "./Dono";
import Consulta from "./Consulta";
import RelatorioConsulta from "./RelatorioConsulta";

import { DadosInvalidosError, AnimalError } from "./errors/AnimalError";

// ----------------------------
// LISTA DE DONOS
// ----------------------------
const donos: Dono[] = [];

try {
  donos.push(new Dono(1, "João Pedro", "99999-1234"));
  donos.push(new Dono(2, "Clara Beatriz", "98888-5678"));
  donos.push(new Dono(3, "Brenda Thereza", "97777-9101"));
  donos.push(new Dono(4, "Rayssa Martins", "94002-8922"));

  // Teste de erro: nome vazio
  // donos.push(new Dono(5, "", "90000-0000"));

} catch (error) {
  if (error instanceof DadosInvalidosError) {
    console.error(`❌ Erro ao criar dono: ${error.message}`);
    process.exit(1);
  } else {
    console.error(`❌ Erro inesperado: ${error}`);
    process.exit(1);
  }
}

// ----------------------------
// LISTA DE ANIMAIS
// ----------------------------
const animais: Animal[] = [];

try {
  animais.push(new Animal(1, "Bob", "Pastor Alemão", false, "Castração"));
  animais.push(new Animal(2, "Pingo", "Pinscher", true, "Cirurgia Ortopédica"));
  animais.push(new Animal(3, "Shuba", "Dálmata", false, "Vacinação"));
  animais.push(new Animal(4, "Muttley", "Shitizu", true, "Castração"));

  // Teste de erro: ID inválido
  // const animalErro = new Animal(-3, "Teste", "SRD", false, "Vacinação");

} catch (error) {
  if (error instanceof DadosInvalidosError) {
    console.error(`❌ Erro ao criar animal: ${error.message}`);
    process.exit(1);
  } else {
    console.error(`❌ Erro inesperado: ${error}`);
    process.exit(1);
  }
}

// ----------------------------
// CADASTRO DE CONSULTAS
// ----------------------------

const consultas: Consulta[] = [];

try {
  consultas.push(
    new Consulta(
      1,
      "Cirurgia Castração",
      animais[0],
      "Dra. Manuela Pacheco",
      donos[0],
      "2025-10-06",
      "09:30"
    )
  );

  consultas.push(
    new Consulta(
      2,
      "Cirurgia Ortopédica",
      animais[1],
      "Dra. Josefina Alves",
      donos[1],
      "2025-10-06",
      "10:15"
    )
  );

  consultas.push(
    new Consulta(
      3,
      "Vacinação",
      animais[2],
      "Dr. Roberto Carlos",
      donos[2],
      "2025-10-06",
      "11:00"
    )
  );

  consultas.push(
    new Consulta(
      4,
      "Castração",
      animais[3],
      "Dra. Eduarda Teixeira",
      donos[3],
      "2025-10-07",
      "14:25"
    )
  );

  // Teste de erro: Dono não existe
  // const consultaErro = new Consulta(5, "Consulta Teste", animais[0], "Dr. X", new Dono(99, "Erro", "123"), "2025-10-01", "12:00");

} catch (error) {
  if (error instanceof AnimalError) {
    console.error(`❌ Erro ao cadastrar consulta: ${error.message}`);
  } else {
    console.error(`❌ Erro inesperado: ${error}`);
  }
}

// ----------------------------
// RELATÓRIOS (igual ao sistema anterior)
// ----------------------------

console.log("\n📄 Relatório inicial:");
RelatorioConsulta.gerarRelatorioConsultas(consultas);

// Buscar animal (igual ao buscar estudante)
try {
  const animalEncontrado = animais.find(a => a.id === 1);
  if (!animalEncontrado) throw new AnimalError("Animal não encontrado!");

  console.log(`\n✅ Animal encontrado: ${animalEncontrado.nome}`);

  const animalInexistente = animais.find(a => a.id === 10);
  if (!animalInexistente) throw new AnimalError("Animal com ID 10 não existe!");

} catch (error) {
  if (error instanceof AnimalError) {
    console.error(`❌ ${error.message}`);
  }
}

// Relatório novamente
console.log("\n📄 Relatório após buscas:");
RelatorioConsulta.gerarRelatorioConsultas(consultas);

// Registrar nova consulta e gerar relatório novamente
const novaConsulta = new Consulta(
  5,
  "Revisão Pós-Cirúrgica",
  animais[0],
  "Dra. Alice Medeiros",
  donos[0],
  "2025-10-10",
  "08:45"
);

consultas.push(novaConsulta);

console.log("\n📄 Relatório final:");
RelatorioConsulta.gerarRelatorioConsultas(consultas);
