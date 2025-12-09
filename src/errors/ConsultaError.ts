export  class ConsultaError extends Error{
    constructor(message: string){
        super(message);
        this.name = "ConsultaError";
    }
}

export class ConsultaEsgotadasError extends ConsultaError{
    constructor(agenda: number){
        super(`A agenda de consultas já esta lotada onde atingiu sua capacidade de atendimento ao mês ${agenda}, desde já agradecemos.`);
        this.name = "ConsultaEsgotadasError";
    }
}

export class ConsultaDuplicadoError extends ConsultaError {
    constructor(id: number){
        super(`Animal ${id} já possui consulta agendada.`);
        this.name = "ConsultaDuplicadoError"
    }
}