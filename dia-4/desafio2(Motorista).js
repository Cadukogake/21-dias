let idade = Number(prompt("Digite sua idade"))
let nome = prompt('Digite seu nome')
let cnh = prompt('Voce possui cnh?')
let carro = prompt("voce possui algum carro?")

if (idade >= 18 && cnh === "sim" && carro === "sim"){
    console.log("Cadu voce sera o motorista")
}
else if (idade >= 18 && cnh === "sim" && carro === "nao"){
    console.log('Cadu, voce pode dirigir mas não tem carro')
}
else if (idade <18 || cnh === "nao"){
    console.log('Cadu, voce não pode dirigir')
}