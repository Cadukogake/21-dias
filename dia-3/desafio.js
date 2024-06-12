//1-Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. 
//2-Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2023, desconsidere o mês) e o IMC do usuário.
//3 - Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): "Olá giovanni, você tem 23 anos, nasceu em 2000, tem 1,83 de altura, pesa 75kg seu IMC é 22,39 Kg/m2" 

let nomeDoUsuario = prompt ('Digite seu nome')
let idadeDoUsuario = prompt ('Digite sua idade')
let alturaDoUsuario = prompt ('Digite sua altura')
let pesoDoUsuario = prompt ('Digite seu peso')

let ano = parseInt(idadeDoUsuario)
let pesoEmNumero = parseInt(pesoDoUsuario)
let alturaEmNumero = parseInt(alturaDoUsuario)
let dataDeNascimento = 2024 - ano
let IMC = pesoEmNumero/alturaEmNumero*alturaEmNumero

console.log('Olá ' + nomeDoUsuario + 'voce tem ' + idadeDoUsuario + ' anos, nasceum em ' + dataDeNascimento + ', tem ' + alturaDoUsuario + ' de altura, pesa ' + pesoDoUsuario + 'KG, e seu imc é de ' + IMC + 'Kg/m2')