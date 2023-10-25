const input = require('readline-sync')

var base, altura
                 
altura = parseFloat(input.question('informe à altura: '))
largura = parseFloat(input.question('informe a largura: '))
profundidade = parseFloat(input.question('Informe a profundidade:'))

// regra
// volume = altura * largura * profundidade
// console.log(`Ò volume é ${volume} cm`)
console.log(`Ò volume é ${altura * largura * profundidade} cm`)