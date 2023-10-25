const input = require(`readline-sync`)

var nome = input.question('Informe o seu primeiro nome?')
var sobrenome = input.question('informe o seu sobrenome?')

console.log(`ola ${nome} ${sobrenome}`)