import Animal from "./Animal";
import RelatorioConsulta from "./RelatorioConsulta";

const animais: Animal[] = [];

const pet1 = new Animal(1,"Bob", "Pastor Alemão", false ,"Banho e Tosa")
animais.push(pet1);

const pet2 = new Animal(2,"Pingo", "Pincher", true, "Consulta de rotina")
animais.push(pet2)

RelatorioConsulta.gerarRelatorioConsulta(animais);

pet1.registrarConsulta()
pet2.registrarConsulta()