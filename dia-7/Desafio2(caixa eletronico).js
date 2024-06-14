/*Solicite o nome e o cpf do seu cliente.
Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).
REGRAS: 
1- Considere iniciar a variável saldo com algum valor
1- Não deve ser permitido sacar um valor não disponível no saldo.
2- Não deve ser permitido sacar nem depositar um valor negativo.*/

let saldo = 1000
let MaiorValoraInserido = 0
let SomaValoresInseridos = 0
let continuar = false
let totalTransacoes = 0

do{
    let nome = prompt('Digite seu nome: ')
    let cpf = prompt('Digite seu CPF: ')
    let valor = Number(prompt('Digite o valor da transação: '))
    let operacao = prompt("qual operação voce deseja fazer? S/D")

    if (valor<0){
        console.log('Valor invadlido')
    }else if (operacao =='S' && valor > saldo){   
        console.log('Saldo insuficiente. A transação não foi realizada')
    }else if (operacao='S') {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`)
        saldo -= valor
        totalTransacoes++
        SomaValoresInseridos += valor
        if (valor>MaiorValoraInserido){
            MaiorValoraInserido = valor
        }
        console.log(`transação realizada com sucesso. Seu saldo atual é R$${saldo}.`)
    }else{
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`)
        saldo += valor
        totalTransacoes++
        SomaValoresInseridos += valor
        if (valor>MaiorValoraInserido){
            MaiorValoraInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}`)
    }

    let opcao = prompt('Deseja continuar? (1 para continuar, 2 para parar')
    if (opcao === '1') {
        continuar = true 
    }else if (opcao === '2'){
        continuar = false
    } else {
        console.log('Opção invalida. Programa encerrado')
        continuar = false
    }

}while (continuar)

console.log(`Saldo final: R$${saldo}`)
console.log(`Maior valor inserido: R${MaiorValoraInserido}`)
console.log(`Média dos valores inseridos: R$${(SomaValoresInseridos/totalTransacoes)}`)
