/*1 - Crie um algoritmo que receba um número inteiro positivo e um array. Popule o array e no final exiba os índices em que número inserido aparece nesse array. Para testes do exercício use até 10 elementos no array.
2 - Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. Modifique os elementos do array de modo que a sequência de números fique ao contrário.
   Ex.: entrada: 1, 2, 3, 4, 5 -> saída: 5, 4, 3, 2 , 1
3 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário
*//*
let numeros = []
contador = 0
for (contador=0; contador <=9; contador++){
    let nomeInserido = Number(prompt("digite um numero"))
    numeros[contador] = nomeInserido
}
console.log(numeros)
*/
/*2 - Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. Modifique os elementos do array de modo que a sequência de números fique ao contrário.*/
/*
let numeros = []
contador = 0
for (contador=0; contador <=4; contador++){
    let nomeInserido = Number(prompt("digite um numero"))
    numeros[contador] = nomeInserido
    
}
console.log(numeros[4],numeros[3],numeros[2],numeros[1],numeros[0])
*/
//3 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário
/*
(let numeros = []
contador = 0
let quantidadeDeNumeros = Number(prompt("Quantos numeros voce quer adicionar?"))
for (contador=0; contador <= quantidadeDeNumeros-1; contador++){
    let nomeInserido = Number(prompt("digite um numero"))
    numeros[contador] = nomeInserido
    
}
let arrayInvertido = numeros.reverse()
console.log("array ao contrario",arrayInvertido)
console.log("array em sequencia", numeros)
*/
//4 - Crie um algoritmo que peça um número inteiro positivo para o usuário. Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
let numeros = Number(prompt("Digite um número inteiro e positívo"))
let Fibonacci = []
Fibonacci[0] = numeros -1 
Fibonacci[1] = numeros

for (let x =2;x<10;x++){
    Fibonacci[x] = Fibonacci[x-1]+Fibonacci[x-2]
}

console.log("Fibonacci: " + Fibonacci)