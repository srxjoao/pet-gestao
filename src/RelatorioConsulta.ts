import Animal from "./Animal";

export default class RelatorioConsulta{
    static gerarRelatorioConsulta(animais: Animal[]): void{
        console.log("Relatório de Consulta");
        animais.forEach((animais)=>{
            console.log(
                `Id:${animais.id} - Nome do animal:${animais.nome} - Raça do animal:${animais.raca} - O animal esta vacinado:${animais.vacinado} - Procedimento realizado${animais.tratamento}`
            );
        });
    }
}