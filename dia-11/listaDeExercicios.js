/*let nomes = []
let numeros = []
let continuar = true
let contador = 0
while (continuar){
    let nome = prompt("Digite aqui o nome do " + (contador+1) + 'aluno: ')
    let nota = Number(prompt("Digite aqui a a nota do " + (contador+1) + 'aluno'))
    nomes[contador] = nome
    notas [contador] = nota
    contador++
    let resposta = prompt("Voce deseja continuar? (s/n)")
    if (resposta='n')
        continuar=false
}

console.log('Notas dos alunos: ')
for(let x = 0; x <nomes.lenght; x++){
    console.log(nomes[x]+' - ' + notas[x])
}

let somaNotas = 0 
for (let x = 0; x <notas.lenght;x++){
    somaNotas += notas[x]
}

let media = somaNotas / alunos.lenght
console.log('A soma das notas foi: '+somaNotas)
console.log('A média geral da turma foi: '+media)*/

//2- Concessionária
let modeloCarro = []
let anoCarro = []
let valorCarro = []
let continuar = true
let contador = 0
while(continuar){
    console.log("Voce entrou na área de cadastramento de carros!")
    let modelo = prompt("Digite o modelo do " + (contador+1) + " carro")
    modeloCarro[contador] = modelo 
    let ano = prompt("Digite o ano do " + (contador+1) + " carro")
    anoCarro[contador] = ano
    let valor = prompt("Digite o valor do " + (contador+1) + " carro")
    valorCarro[contador] = valor
    contador ++
    let resposta = prompt("Se voce deseja parar o cadastramento digite, (s/n)")
    if (resposta == "n")
        continuar = false
    
}
console.log("Carros cadastrados: ")
for (let x = 0; x <modeloCarro.length; x++){
    console.log(modeloCarro[x]+' - '+anoCarro[x]+' - '+valorCarro[x])
}

for(let x=0; x <valorCarro.length -1; x++){
    for(let j=0; j <valorCarro.length -i -1; j++){
        if(valorCarro[j]>valorCarro[j+1]){
            let modeloMaiorValor = modeloCarro[j]
            modeloCarro[j] = modeloCarro[j+1]
            modeloCarro [j+1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anoCarro[j] = anoCarro[j+1]
            anoCarro[j+1] = anoMaiorValor

            let maiorValor = valorCarro
            valorCarro[j] = valorCarro[j+1]
            valorCarro[j+1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for (let i =0; i<modeloCarro.length;i++){
    console.log(modeloCarro[i]+" - "+anoCarro[i]+" - "+valorCarro[i])
}