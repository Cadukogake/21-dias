/*Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.
1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.
2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.
3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:
    - O cliente recebe anualmente aumento salarial. 
    - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600.
*/

confirmar = 'errado'
while(confirmar != "correto"){
    console.clear()
    let nome = prompt('Digite seu nome')
    let idade = Number(prompt("Digite sua idade"))
    var salario = parseFloat(prompt("Digite seu salário"))
    console.log('Olá! ', nome," voce tem ", idade, " anos e possui um salário de um total de: ", salario, "R$")
    confirmar = prompt("As informações estão corretas? Se estiver incorreta digite 'errado', se estiver correta, digite 'correto'")
}

let aumento = 0.015
console.log("previsão salarial para os próximos 10 anos: ")
for (let ano = 1; ano <=10; ano++){
    salario += salario *aumento
    aumento*=2
    console.log((2023+ano)+" = R$ "+ salario.toFixed(3))
}


