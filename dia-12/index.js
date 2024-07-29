let nomes = []
let senhas = []
let contador = 0

let continuar = true

while (continuar){
    //Passo 2 e 3: solicitando qual operacao o usuario deseja fazer e organizando a execução do código com um switchCase dentro de um While
    let opcao = prompt("O que deseja? 1 - Cadastro / 2 - Login / 3 - Excluir / 4 - Encerrar")
    switch (opcao){
        case "1":
            //Passo 4: Criando um cadastro de usuario
            nomes[contador] = prompt("Qual o nome?")
            senhas[contador] = prompt("Qual a senha")
            contador++
            
            break;
        case "2":
            //Passo 5: Criando Login
            let nome = prompt("Qual o nome?")
            let senha = prompt("Qual a senha?")
            let loginValido = false

            for (let i = 0; i <nomes.length; i++){
                if (nome == nomes[i] && senha == senhas[i]){
                    loginValido = true
                }
            }
            if (loginValido){
                alert("Login feito com sucesso. Bem-Vindo!")
            }else {
                alert("Login ou senha incorretos!")
            }
            break;
        case "3":
            //Passo 6: Criando Excluir
            let nomeExcluir = prompt ("QUal o nome que deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for (let i =0; i< contador; i++) {
                if(nomeExcluir == nomes[i]){
                    alert ("Cadastro excluído com sucesso")
                }else {
                    nomesAux[contadorAux] = nomes [i]
                    senhasAux[contadorAux] = senhas [i]
                    contadorAux++
                }
            }
            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;
        case "4":
            continuar = false
            break;
        default:
            console.log("Opção invalida, escolha outra!")
            break;
        
    }
}