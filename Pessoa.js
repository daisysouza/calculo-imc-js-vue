export class Pessoa {

    constructor(nome, massa, altura)
    {
        if (massa < 0 || massa > 210 || altura < 0 || altura > 2.3) {
            console.log("Medida de massa ou altura invalidos");
            return;
        }else if (nome.length < 5 ) {
            console.log("Nome invalida menor que 5 letras.");
            return;
        }
        this._nome = nome;
        this._massa = massa.toFixed(0);
        this._altura = altura.toFixed(0);
        Pessoa.contaPaciente += 1;
        console.log("Criando paciente");
    }
    calculaImc() {
        return this._imc = this._massa / this._altura** 2;
    }
    retornaImc() {
        return this._imc;
    }
    retornaNome() {
        return this._nome;
    }
    retornaMassa() {
        return this._massa;
    }
    retornaAltura() {
        return this._altura;
    }

}

