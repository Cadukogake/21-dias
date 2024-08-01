class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.SSD = SSD
    }
}
console.log("Informações sobre o meu computador")

let tipo = prompt("Escreva se seu computador é um nootbook ou desktop")
let processador =  prompt("Qual o seu processador?")
let video = prompt("Sua placa de vídeo é integrada ou dedicada?")
let armazenamento = prompt("Qual a capacidade de armazenamento do seu computador?")
let memoriaRam = prompt("Quantas GB tem sua memoria ram")
let SSD = prompt("Seu computador possuí SSD?(responda com s/n)")

let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, SSD)
console.log(computador)