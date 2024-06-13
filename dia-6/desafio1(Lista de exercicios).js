/*1 - Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.
2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
   Ex.: 0 5 10 15 20 25 … 45 50 Fim!
3 - Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa.
   Ex.: 50 45 40 35 30 25 … 5 0 Fim!
4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
*/
/*
//1-)
let algoritmo = Number(prompt('Digite um número inteiro e maior que 0'))

for(contador = 0; contador <= algoritmo; contador++){
    console.log(contador)
}
//2-)
for (contagem = 0; contagem <=50; contagem+=5){
    console.log(contagem)
}
//3-)
for (contagem = 50; contagem >=0; contagem-=5){
    console.log(contagem)
}
console.log('fim!')*/

//4-)
let numerox = Number(prompt("Digite um número qualquer inteiro!"))

for(contagem = 0; contagem <=10; contagem++){
    console.log(numerox + ' x '+ contagem + '=' + numerox *contagem)
    
}
for(contagem = 0; contagem <=10; contagem++){
    console.log((numerox+1) + ' x '+ contagem + '=' + (numerox+1) *contagem)
    
}
for(contagem = 0; contagem <=10; contagem++){
    console.log((numerox+2) + ' x '+ contagem + '=' + (numerox+2) *contagem)
    
}