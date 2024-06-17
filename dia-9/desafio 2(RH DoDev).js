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


