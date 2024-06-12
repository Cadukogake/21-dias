/*1.1 - Crie um algoritmo que peça 2 números ao usuário
1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
1.3 - Exiba no console a operação feita e o resultado da conta*/

let numero1 = Number(prompt('Digite seu primeiro número'))
let numero2 = Number(prompt('Digite seu segundo número'))

let operação = Number(prompt("Escolha sua operação matemática 1(soma); 2(subtração); 3(divisão); 4(multiplicação"))

switch (operação){
    case 1:
        soma = numero1 + numero2
        console.log(soma)
        break
    case 2:
        subtração = numero1 - numero2
        console.log(subtração)
        break
    case 3:
        divisão = numero1/numero2
        console.log(divisão)
        break
    case 4:
        multiplicação = numero1*numero2
        console.log(multiplicação)
        break
    default:
        console.log('Voce escolheu uma opção inválida!')
}