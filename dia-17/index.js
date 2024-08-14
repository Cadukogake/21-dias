class Hotel {
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

function cadastrarHotel() {
    let nome = prompt("Digite o nome do hotel:");
    let categoria = parseInt(prompt("Digite a categoria do hotel:"));
    let endereco = prompt("Digite o endereço do hotel:");
    let telefone = prompt("Digite o telefone do hotel:");
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    idHotel++;
    hoteis.push(hotel);
}

function cadastrarReserva() {
    let idHotel;
    let existe = false;
    do {
        idHotel = parseInt(prompt("Digite o id do hotel:"));
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel === hoteis[i].Id) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            console.log("ID de hotel não cadastrado.");
        }
    } while (!existe);

    let nome = prompt("Digite o nome do responsável:");
    let diaEntrada = parseInt(prompt("Digite o dia de entrada:"));
    let diaSaida;
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída:"));
        if (diaSaida < diaEntrada) {
            console.log("O dia de saída deve ser maior que o dia de entrada.");
        }
    } while (diaSaida < diaEntrada);

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
    idReserva++;
    reservas.push(reserva);
}

function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let i = idHotel - 1;
            console.log("Hotel:", hoteis[i].Nome);
            console.log("Responsável:", reserva.Responsavel);
            console.log("Dia de entrada:", reserva.DiaEntrada);
            console.log("Dia de saída:", reserva.DiaSaida);
        }
    });
}

function ProcurarHotelPelaReserva(idReserva) {
    let reserva = reservas.find(r => r.Id === idReserva);
    if (reserva) {
        let hotel = hoteis.find(h => h.Id === reserva.IdHotel);
        if (hotel) {
            console.log("Hotel:", hotel.Nome);
            console.log("Endereço:", hotel.Endereco);
            console.log("Dia de entrada:", reserva.DiaEntrada);
            console.log("Dia de saída:", reserva.DiaSaida);
        } else {
            console.log("Hotel não encontrado.");
        }
    } else {
        console.log("Reserva não encontrada.");
    }
}

function ProcurarReservasPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome === reservas[i].Responsavel) {
            console.log("ID da Reserva:", reservas[i].Id);
            console.log("Hotel:", hoteis[reservas[i].IdHotel - 1].Nome);
        }
    }
}

function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = [];
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria === hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome);
        }
    }
    return hoteisProcurados;
}

function AtualizarTelefone(idHotel, telefone) {
    let hotel = hoteis.find(h => h.Id === idHotel);
    if (hotel) {
        hotel.Telefone = telefone;
        console.log("Número de telefone atualizado!");
    } else {
        console.log("Hotel não encontrado!");
    }
}

let continuar = true;
do {
    let opcao = prompt(
        "Escolha uma opção: \n1 - Cadastrar hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel" +
        "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria" +
        "\n7 - Atualizar telefone de um hotel \n8 - Encerrar programa"
    );

    switch (opcao) {
        case "1":
            cadastrarHotel();
            break;
        case "2":
            cadastrarReserva();
            break;
        case "3":
            ProcurarReservasPeloHotel(parseInt(prompt("Digite o ID do hotel:")));
            break;
        case "4":
            ProcurarHotelPelaReserva(parseInt(prompt("Digite o ID da reserva:")));
            break;
        case "5":
            ProcurarReservasPeloNome(prompt("Digite o nome do responsável pela reserva:"));
            break;
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar:")));
            console.log(hoteisProcurados);
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o ID do hotel que deseja atualizar:"));
            let telefone = prompt("Digite o novo telefone:");
            AtualizarTelefone(idHotel, telefone);
            break;
        case "8":
            console.log("Programa encerrado");
            continuar = false;
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
} while (continuar);
