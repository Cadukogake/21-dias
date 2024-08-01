class Carro {
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia,velocidadeMaxima,aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    CalcularTempoMedio(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida{
    Nome
    Tipo
    Distancia 
    Vencedor 
    Participantes

    constructor(nome,tipo,distancia){
        this.Nome = nome
        this.Tipo = tipo 
        this.Distancia = distancia
        this.Vencedor = ""
        this.Participantes = []
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor
    }
    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }
}

let corrida = new Corrida("Monza", "Fórmula 1", 60000)

let carros = []

let adicionarOutroCarro = true;

while (adicionarOutroCarro) {
    let nomeCarro = prompt("Digite o nome do carro");
    let potenciaCarro = parseFloat(prompt("Digite a potencia do carro"));
    let velocidadeMaximaCarro = parseFloat(prompt("Digite a velocidade máxima do carro"));
    let aceleracaoCarro = parseFloat(prompt("Digite o tempo que o carro chega de 0 a 100 km/h"));

    let novoCarro = new Carro(nomeCarro, potenciaCarro, velocidadeMaximaCarro, aceleracaoCarro);
    corrida.Participantes.push(novoCarro);

    adicionarOutroCarro = confirm("Deseja adicionar outro carro?");
}



corrida.DefinirVencedor()
corrida.ExibirVencedor()