const input = require('readline-sync')

var nome = input.question('Informe o seu primeiro nome? ')
var sobrenome = input.question('Informe o seu sobrenome? ')

console.log(`olá, ${nome} ${sobrenome}`)
