/*Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
- A média geral dos alunos
- Quantos homens enviaram as notas
- Quantas mulheres tiveram nota acima de 7
- Qual a maior nota entre os homens*/

let mediageral = 0
let qnthomens  = 0
let qntMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while (contador <=10){
    nota = Number(prompt('Digite a nota do ' + contador + ' aluno'))
    sexo = prompt('Digitie o sexo do aluneo (m/f)')
    
    if (sexo=='m'){
        if (nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qnthomens++
    }
    if(sexo == 'f' && nota > 7){
        qntMulheresAcimaDe7++
    }
    mediageral+= nota
    contador++
}

mediageral = mediageral/10

console.log('A média geral dos alunos foi: '+ mediageral)
console.log('A quantidade de homens cadastrados foi: ' + qnthomens)
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: ' + qntMulheresAcimaDe7)
console.log('A maior nota entre os homens foi: ' + maiorNotaHomens)