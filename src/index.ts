import Animal from "./Animal";
import Dono from "./Dono";
import Consulta from "./Consulta";
import RelatorioConsulta from "./RelatorioConsulta";

const donos = [
  new Dono(1, "João Pedro", "99999-1234"),
  new Dono(2, "Clara Beatriz", "98888-5678"),
  new Dono(3, "Brenda Thereza", "97777-9101"),
  new Dono(4, "Rayssa Martins","94002-8922")
];

const animais = [
    // array "id" começa em zero na hora de cadastrar a consulta
  new Animal(1, "Bob", "Pastor Alemão", false, "Castração"),
  new Animal(2, "Pingo", "Pinscher", true, "Cirurgia Ortopédica"),
  new Animal(3, "Shuba", "Dálmata", true, "Vacinação"),
  new Animal(4, "Mantruei", "Shitizu", true,"Castração")
];

const consultas = [
  new Consulta(1, "Cirurgia castração", animais[0], "Dra. Manuela Pacheco", donos[0], "2025-10-06", "09:30"),
  new Consulta(2, "Cirurgia Ortopédica", animais[1], "Dra. Josefina Alves", donos[1], "2025-10-06", "10:15"),
  new Consulta(3, "Vacinação", animais[2], "Dr. Roberto Carlos", donos[2], "2025-10-06", "11:00"),
  new Consulta(4,"Castração", animais[3], "Dra. Eduarda Teixeira", donos[3],"2025-10-07","14:25")
];

RelatorioConsulta.gerarRelatorioConsultas(consultas);
