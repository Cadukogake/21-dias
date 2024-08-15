class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade 

    constructor(titulo, autor, editora, anodepublicacao){
    this.Titulo = titulo
    this.Autor = autor
    this.Editora = editora
    this.AnoDePublicacao = anodepublicacao
    this.Disponibilidade = true;
    }
}
let Livros = []
Livros[0] = new Livro("Livro A", "Cadu", "Monaliza", "1998")
Livros[1] = new Livro("Livro B", "Carlos", "Michelangelo", "1997")
Livros[2] = new Livro("Livro C", "Eduardo", "Da Vincci", "1996")
console.log(Livros)

class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoDeLivros 
    constructor(nome, endereco, telefone){
    this.Nome = nome
    this.Endereco = endereco
    this.Telefone =  telefone
    AcervoDeLivros = []
    }
}
let continuar = true
while(continuar){
    let buscarLivro = prompt("Qual opção voce quer? (a para buscar um livro especifico)")
    switch(buscarLivro){
        case "a":
            livroEspecifico()
            break;
        case "b":
            AlugarLivros()
            break;
        case "c":
            devolucaoDoLivro()
            break;
            
        case "d":
            console.log("Sua operação chegou ao fim!")
            continuar = false
    }

}
function devolucaoDoLivro() {
    let devolucaoLivro = prompt("Qual livro você deseja devolver? ");

    let livroJaExiste = Livros.find(livro => livro.Titulo === devolucaoLivro);

    if (livroJaExiste) {
        console.log(`O livro "${devolucaoLivro}" já está na biblioteca.`);
    } else {
        let novoLivro = {
            Titulo: devolucaoLivro,
            Autor: prompt("Informe o autor do livro: "),
            Editora: prompt("Informe a editora do livro: "),
            AnoDePublicacao: prompt("Informe o ano de publicação do livro: ")
        };
        Livros.push(novoLivro);
        console.log(`Você devolveu o livro "${devolucaoLivro}".`);
    }
}


function livroEspecifico() {
    let opcao = prompt("Escolha qual livro você deseja: ");
    let livroEncontrado = Livros.find(livro => livro.Titulo === opcao);

    if (livroEncontrado) {
        console.log(`${opcao} está na biblioteca.`);
    } else {
        console.log(`${opcao} não está na biblioteca.`);
    }
}
function AlugarLivros(){
    let escolherLivro = prompt("Qual livro voce deseja alugar? ")
    let alugarLivros = Livros.find(livro => livro.Titulo === escolherLivro);
    if (alugarLivros){
        console.log(`Você alugou o livro: ${escolherLivro}`);
        let index = Livros.indexOf(alugarLivros)
        if (index !== -1){
            Livros.splice(index, 1)
        }
    }else{
        console.log("Esse livro não esta disponível para locação!")
    }


}