function perguntarColaborador(){
    var nome = prompt("Digite o nome do colaborador: ");
    var aa = parseFloat(prompt("Digite o salario do colaborador: "));
    calcularAumentoSalario(nome, aa);
}
function calcularAumentoSalario(nome, aa) {
    var aumento = 0;
    if (aa <= 1500){
        aumento = 0.2;
    }else if(aa <= 2000){
        aumento = 0.15;
    }else if (aa <= 3000){
        aumento = 0.10;
    }else{
        aumento = 0.05;
    }
    var novoSalario = aa + (aa * aumento);
    console.log("O nome do colaborador é: " + nome)
    console.log("O aumento do seu salário foi: " + aumento*100 + " %")
    console.log("Resultando em um total de " + novoSalario + " por mês!")
    perguntarNovamente()
}
perguntarColaborador();

function perguntarNovamente (){
    let resposta = prompt("Voce deseja cadastrar outro colaborador? (s/n)")
    if (resposta == "s"){
        perguntarColaborador();
    }else{
        console.log("O processo acabou.")
    }
}