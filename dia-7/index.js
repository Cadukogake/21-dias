let condicao = true
while(condicao){
    let idade = Number(prompt('Insira a sua idade'))

    if (idade<18){
        console.log('Você é menor de idade')
        condicao = false
    }
    else{
        console.log(idade)
        console.log('Pode entrar voce é maior de idade')
    }
}
console.log('Acabou o while')

/*(let idade = 18
while(idade >=18){
    idade=Number(prompt('Insira a sua idade'))
    console.log(idade)
}
console.log('Você é menor de idade')

let idade =17
do{
    idade = Number(prompt('Inisira sua idade'))
    console.log(idade)
}while (idade >=18)
    console.log('Voce é menor de idade')*/