class Carro{
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(Nome,Potencia,VelocidadeMaxima,Aceleracao){
        this.Nome = Nome
        this.Potencia = Potencia
        this.VelocidadeMaxima = VelocidadeMaxima
        this.Aceleracao = Aceleracao
    }
    CalcularTempoMedia(distancia){
        let resultado = distancia/(this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
}
class Corrida{
    nome 
    tipo
    distancia
    participantes
    vencedor
    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = " "
    }
    DefinirVencedor(){
        let menorTempo = this.participantes[0].CalcularTempoMedio(this.distancia)
        let vencedor = this.participantes[0]

        for (let index =1; index < this.participantes.length;index++){
            let tempo = this.participantes[index].CalcularTempoMedio(this.distancia)
            if (tempo<menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }
        return this.vencedor = vencedor
    }
    ExibirVencedor(){
            alert("O vencedor é: "+ this.vencedor.nome)
    }
}

let corrida = new Corrida("Monza", "Fórmual 1", 60000)

corrida.participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.participantes[1] = new Carro("Marea", 210, 200, 9) 
corrida.participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()
