let nomes = [];
let continuar = true
let posicaoDoArray = 0

while (continuar=true){
    let nomeInserido = prompt("Insira um nome")
    nomes[posicaoDoArray] = nomeInserido

    let desejacontinuar = prompt("Insira 1 caso deseje adicionar um novo nome")
    if(desejacontinuar != "1"){
        continuar = false
    }
    posicaoDoArray++
}