import {Pessoa} from "./Pessoa.js";

export class Paciente extends Pessoa
{
    constructor(nome, massa, altura) {
        super(nome, massa, altura);
        Paciente.contaPaciente += 1;
    }
}



