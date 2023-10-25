const input = require('readline-sync')

var valor = parseFloat(input.question('Informe um valor em real R$: '))
var moeda = input.question(`Deseja converter para: 1 - Dolar | 2 - Euro `)
var resultado

switch (moeda) {
    case '1':
        resultado = `O valor em DOLAR será de $ ${(valor / 5.00).toFixed(2)}` 
        break;
    case '2':
        resultado = `O valor em EURO será de ${(valor / 6.50).toFixed(2)}`
        break;
    default:
        resultado = `Nenhuma opção selecionada para converter ${valor.toFixed(2)}`
        break;
}

console.log(resultado)