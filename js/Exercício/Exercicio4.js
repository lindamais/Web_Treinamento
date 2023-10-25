const input = require('readline-sync')

// peso das provas
const p2 = 2
const p3 = 3
const p5 = 5

var notaDisciplina1,  notaDisciplina2, notaDisciplina3, mediaponderada

var notaDisciplina1 = parseFloat(input.question('Ìnforme a nota da disciplina 1:'))
var notaDisciplina2 = parseFloat(input.question('Ìnforme a nota da disciplina 2:'))
var notaDisciplina3 = parseFloat(input.question('Ìnforme a nota da disciplina 3:'))

//regra
mediaponderada = (notaDisciplina1 * p2 +  notaDisciplina2 * p3 + notaDisciplina3 * p5)/(p2+p3+p5)

console.log(`À sua media ponderada é ${mediaponderada}` )
