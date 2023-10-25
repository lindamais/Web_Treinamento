
// const inp = require('readline-sync')

// var temperatura = parseFloat(inp.question('Informe um valor em Fahrenheit:'))
// let celsius

// celsius = (temperatura - 32) * 5 / 9


const inp = require('readline-sync')

var temperatura = parseFloat(inp.question('Informe uma temperatura:'))
var tipo = inp.question('Deseja converter: 0 - Celsius | 1 - Fahrenheit')
let calculo, resultado
switch (tipo) {
    case '0':
        calculo = (temperatura - 32) * 5/9 // FORMULA CELSIUS
        resultado = `A temperatura ${temperatura} ºF é ${calculo} °C` 
        break;
    case '1': calculo = (temperatura * 9 + 160)  / 5 // FORMULA FAHRENHEIT
        resultado =  `A temperatura ${temperatura} ºC é ${calculo} °F` 
        break

    default:
        resultado ='opção invalida'
        break;
}
console.log(resultado)

// celsius = (temperatura - 32) * 5 / 9

// console.log(`A temperatura ${temperatura} ºF é ${celsius} °C`)