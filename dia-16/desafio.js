arrayNome = []
arraysenha = []

function solicitarOpicao(){
    let opcao = prompt("Escolha uma opção: Cadastro / Login / Exclusão de conta / Encerrar o programa")
    return opcao
}

function cadastrUsuario (){
    arrayNome.push(prompt("Digite seu nome: "))
    arraysenha.push(prompt("Digite a senha: "))
}

function loginUsuario(nome, senha) {
    let indice = arrayNome.indexOf(nome)
    if (indice !== -1 && arraysenha[indice] == senha){
        return true
    } else {
        return false
    }
    
}

function excluirCadastro(nome){
    let indice = arrayNome.indexOf(nome)
    if (indice !== -1) {
        arrayNome.splice(indice, 1)
        arraysenha.splice(indice, 1)
        console.log("Exclusão feita com sucesso")
    } else{
        console.log("Usuário não encontrado")
    }
}

let continuar = true
while(continuar){
    let opcao = solicitarOpicao()

    switch(opcao){
        case "Cadastro":
            cadastrUsuario()
            break;
    }
}