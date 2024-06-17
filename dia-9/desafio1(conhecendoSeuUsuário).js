
do {
    let nome = prompt('Digite aqui seu nome: ')
    let idade = Number(prompt('Digite aqui sua idade: '))
    let peso = Number(prompt('Digite aqui o seu peso: '))
    let altura = parseFloat(prompt('Digite aqui sua altura'))
    let profissao = prompt('Digite aqui a profissão que voce possui: ')
    console.log('Olá ', nome,'você tem ', idade,'anos, é ', profissao, ', tem ', altura, 'M e pesa', peso, 'KG')

    if(idade >= 18){
        console.log('Voce ja é de maior, ta liberado para tomar geladas!')
    }
    else if(idade <=0){
        console.log("Voce nem nasceu kkkk")
    }
    else{
        console.log('Você é de menor, ainda não pode tomar geladas!')
    }

    console.log('Voce ja viveu', idade, 'anos,',idade*52,' semanas e ', idade*365,' dias'  )


    //calculando IMC
    let teste = altura*altura
    let IMC = peso/teste
    if (IMC <= 18.5){

        console.log('Seu IMC é de ', IMC,'kg/m2, e voce se encontra em estado de magreza')
    }else if (IMC >18.5 && IMC <=24.9){
        console.log('Seu IMC é de ', IMC,'kg/m2, e voce se encontra em estado normal')
    }else if (IMC>24.9 && IMC<=30){
        console.log('Seu IMC é de ', IMC,'kg/m2, e voce se encontra em estado de sobrepeso')
    }else {
        console.log('Seu IMC é de ', IMC,'kg/m2, e voce se encontra em estado de obesidade')
    }


    let anoAtual = 2023
    let anoUsuario = anoAtual - idade
    let anoNascimento = anoUsuario
    let idadeAtual = 0
    for (anoNascimento = anoUsuario; anoNascimento <= anoAtual; anoNascimento ++){
        console.log(anoNascimento + ' - ' + idadeAtual + ' anos de idade')
        idadeAtual++
    }
    var continuar = prompt("Deseja inserir os dados novamente? (s/n)")
}while (continuar=="s")
