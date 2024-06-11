let fome = prompt('Voce esta com fome? ')
let dinheiro = prompt ('Voce tem dinheiro?')
let restaurante = prompt ('O restaurante esta aberto? ')

if (fome === 'sim' && dinheiro === 'sim' && restaurante === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido! ')
}
else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'nao'){
    console.log('O jantar de hoje sera por delivery')
}
else if(fome === 'nao' || dinheiro == 'nao'){
    console.log('Hoje a janta será em casa!')
}
