/*Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações. Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.
Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.
Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. 
Calcule o IMC do seu usuário e informe a faixa dele.
*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)
O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo indicar:
      - Magreza, quando o resultado é menor que 18,5 kg/m2;
      - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   
      - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
      - Obesidade, quando o resultado é maior que 30 kg/m2.
A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, faça essa conta usando apenas o ano).
Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.   
   *ATENÇÃO: Aqui você deve utilizar o loop FOR.
   Ex: Nasceu em 2018 você deve exibir: 
       2018 - 0 anos de idade
       2019 - 1 anos de idade
       2020 - 2 anos de idade
       2021 - 3 anos de idade
       2022 - 4 anos de idade
Utilizando o loop WHILE/DOWHILE, pergunte a seu usuário se ele deseja inserir novos dados ou se deseja finalizar o programa
*/
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
