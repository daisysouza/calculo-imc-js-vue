/*-class Pessoa-----------------------------------*/
class Pessoa {

    constructor(nome, massa, altura, gordura)
    {
        if (massa < 0 || massa > 210 || altura < 0 || altura > 2.3) {
            console.log("Medida de massa ou altura invalidos");
            return;
        }else if (nome.length < 5 ) {
            console.log("Nome invalida menor que 5 letras.");
            return;
        }
        this.nome = nome;
        this.massa = massa.toFixed(0);
        this.altura = altura.toFixed(2);
        this.gordura = gordura.toFixed(0);
        Pessoa.contaPaciente += 1;
        console.log("Criando paciente: " + this.retornaNome());
    }
    calculaImc() {
        return this.imc = this.massa / this.altura ** 2;
    }
    retornaNome() {
        return this.nome;
    }
    retornaMassa() {
        return this.massa;
    }
    retornaAltura() {
        return this.altura;
    }
    retornaGordura() {
        return this.gordura;
    }
}
/*-class Paciente-----------------------------------*/
class Paciente extends Pessoa
{
}

/*-Console-----------------------------------*/

const pac1 = new Paciente("Saci Perere", 100, 1.7, 10,0);


const tdNome = document.querySelector(".info-nome")
tdNome.textContent = pac1.retornaNome();

const tdMassa = document.querySelector(".info-massa");
tdMassa.textContent = pac1.retornaMassa();

const tdAltura = document.querySelector(".info-altura");
tdAltura.textContent = pac1.retornaAltura();

const tdGordura = document.querySelector(".info-gordura");
tdGordura.textContent = pac1.retornaGordura();

const tdImc = document.querySelector(".info-imc")
tdImc.textContent = pac1.calculaImc().toFixed(0);
