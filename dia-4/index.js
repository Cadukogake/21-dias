/*let idade = Number(prompt('Digite sua idade: '))


if (idade <= 10){
    console.log(idade)
    let dentroEscopo = 'Cadu'
    console.log(dentroEscopo)
    console.log('Voce tem menos ou 10 anos')
    
}else{
    console.log('Voce tem mais de 10 anos')
}

console.log('SAI DO ESCOPO DO IF')
console.log(dentroEscopo)*/

let idadePessoais = Number(prompt("Digite sua idade: "))
let nomePessoais = prompt("Digite seu nome: ")
if (idadePessoais === 20 && nomePessoais === 'Carlos Eduardo'){
    console.log('Voce é o cadu')
}
else if(idadePessoais === 20 || nomePessoais === 'Carlos Eduardo'){
    console.log('Voce não é o cadu, mas pode ter o mesmo nome ou a mesma idade')
}
else{
    console.log('Voce não é o cadu, e eu não sei quem voce é')
}
