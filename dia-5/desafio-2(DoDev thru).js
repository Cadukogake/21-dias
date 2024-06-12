/*1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".*/

let escolhas = Number(prompt("Digite a opção do seu combustível!   1 - Gasolina;  2 - Etanol;  3 - Apenas calibrar o pneu"))

switch (escolhas){
    case 1:
        let valorGasolina = Number(prompt("Digite o valor que você quer colocar de gasolina"))
        litrosGasolina = valorGasolina/5
        console.log("A quantidade de litros adicionados em seu carro é:",litrosGasolina,"L")
        break
    case 2: 
        let valorEtanol = Number(prompt("Digite o valor que você quer colocar de etanol"))
        litrosEtanol = valorEtanol/3
        console.log("A quantidade de litros adicionados em seu carro é:",litrosEtanol,"L")
        break
    case 3:
        console.log('Pneus calibrados com sucesso')
        break
    default:
        console.log('A opção que você escolheu é invalida')
}